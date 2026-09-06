# @library/design

## Scope

Domain-aware UI components built on top of `@library/kit`: money display, balance, operations, payment UI, result UI, headers, banners, and shared app images.

## Public API

- Export reusable components from `src/index.ts`.
- Export shared images through `src/images/index.ts`.
- Do not make consumers import component internals unless the package already exposes a specific type or submodule.

## Boundaries

- This package may depend on `@library/kit` and formatting utilities.
- Do not put API calls, storage access, navigation decisions, or domain service calls here.
- Domain semantics for display are allowed; business decisions belong in domain services or controllers.
- Prefer shared `images/*` for assets reused across features. Feature-specific assets may remain in the owning screen/widget.

## Component Rules

- Follow existing component structure: `<component>/<component>.tsx`, `default.styles.ts`, `index.ts`, and optional local assets/styles.
- Keep display components controlled by props; avoid hidden global state.
- Use `Amount` and `Balance` for money display when they fit the use case.
- Use `Operation`, `OperationStatus`, `OperationResult`, `ResultAlert`, and `InfoLine` before creating another result/detail pattern.
- Keep names and file casing consistent with existing exports, even when legacy names are imperfect.

## Hot Spots

- `operation-result`, `result-alert`, `amount`, `balance`, `card-button`, `auth-header`, and `fab-action-button` are used across flows. Search callers before changing props.
