# @layout/auth

## Scope

Auth route wrapper with a minimal header and a context hook for child screens to register custom back behavior.

## Public API

- `AuthLayout`
- `useAuthLayout`

## Rules

- Use this layout for auth form screens that need the current auth header/back behavior.
- Screens may call `useAuthLayout()` to set or clear the back handler through context.
- Do not put auth business rules here; keep auth flow logic in screens/controllers/domain services.
- Keep route composition in `clients/wallets/src/boilerplate.tsx`; this package should not decide which auth screen uses it.
- Preserve compatibility with `KeyboardAwareLayout`, because auth forms are commonly wrapped by both layouts.
