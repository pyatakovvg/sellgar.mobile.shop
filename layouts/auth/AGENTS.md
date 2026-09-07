# @layout/auth

## Scope

Auth route layout with a minimal presentation header.

## Public API

- `AuthLayout`

## Rules

- Declare the package as an `@Layout` framework unit and keep its React view private.
- Use this layout for the anonymous authentication route branch.
- Route Back through framework navigation and `BackService`; do not add a parallel React context for it.
- Do not put auth business rules here; keep auth flow logic in screens/controllers/domain services.
- Keep route composition in the application router; this package does not decide which route branch uses it.
