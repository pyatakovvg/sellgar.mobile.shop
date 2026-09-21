# Request executor delegate

`RequestExecutorDelegateInterface` is the domain request execution port. It preserves both core `run()` overloads
and the result type, without exposing global interceptor registration or replacing `RequestExecutorInterface`.

The contract, `RequestExecutorDelegate` implementation and `RequestExecutorDelegateBinding` belong to this directory.
`DomainBinding` installs the component's binding. `AuthBinding` does not register the delegate.
Gateway consumers import only the port through this directory's facade.

The delegate uses the public auth/session facades and does not depend on their storage ports:

- `AuthService.isAccessTokenExpired()` delegates to the existing storage expiry check.
- `AuthService.refreshStoredCredentials()` reads the stored refresh token internally and calls the unchanged
  `refresh(token)` method, which saves the resulting credentials.
- `SessionRestoreUsecase.execute()` performs the existing restore flow, including fingerprint generation.

No refresh token or storage detail is exposed to the delegate. Auth gateways continue using the ordinary core executor.

## Preparation before the request

The delegate registers a task-local `request.use()` callback on the existing core executor:

`prepareRequest(config)` returns the same configuration after preparing credentials; it does not replace the
signal, queue options or operation. Token headers remain inside the existing gateways, which are not migrated yet.

| Condition                                         | Preparation                                                      | Original operation  |
| ------------------------------------------------- | ---------------------------------------------------------------- | ------------------- |
| Access token has not expired                      | None                                                             | Once                |
| Expiration is absent or expired; refresh succeeds | `AuthService.refresh()` saves credentials                        | Once, after refresh |
| Refresh fails with `BadRequestException`          | `SessionRestoreUsecase.execute()` restores and saves credentials | Once, after restore |
| Restore fails                                     | Propagate the original restore error                             | Not executed        |
| Refresh fails with another error                  | Keep the legacy behavior: continue with existing credentials     | Once                |
| Original operation fails                          | Core executor's existing error handling                          | No retry            |

Token headers remain the gateway's responsibility. Read the access token **inside** the operation passed to `run()`,
after preparation, rather than capturing it before `run()`.

Core owns admission, queues, cancellation and session recovery. The delegate forwards execution options unchanged.
If the parent task is cancelled during refresh, it must not start restore or the original operation afterward.
Refresh/restore currently execute as separate tasks through the ordinary executor; parent cancellation does not
abort an already-running child task or prevent that child from saving tokens. Concurrent token refresh and
logout/late-response coordination are explicitly deferred, not solved by this delegate.

Auth operations used by preparation must keep using `RequestExecutorInterface`. They must not depend on this
delegate, directly or transitively: that would introduce recursive preparation and a DI cycle.

## Integration status

The binding is available for review. No gateway uses it yet. Gateway migration requires separate approval;
authentication, session policies, HTTP transport and core behavior are unchanged.
