# Utility Packages

## Scope

Applies to all packages under `utils/*`.

## Contract

- Utility packages must stay small, deterministic, and framework-light.
- Keep public exports in `src/index.ts`.
- Prefer pure functions without hidden mutable state.
- Do not add React components, MobX stores, DI containers, controllers, or navigation logic to utilities.
- Keep package names under the `@utils/*` namespace.

## Formatting Utilities

- Use `@utils/format` for display formatting of amounts, numbers, dates, times, phones, bank cards, and operation labels.
- Do not duplicate formatting rules inside screens, widgets, or design components.
- Preserve the current Russian numeral locale behavior unless the product localization rules change.
- Keep formatters explicit about accepted input shape; functions that throw on invalid masks should keep that behavior unless callers are updated.

## Function Utilities

- Use `@utils/funcs` for generic function helpers such as `debounce`.
- Re-export stable third-party helpers only when centralizing usage adds value across packages.
- Do not wrap libraries just to hide imports unless the wrapper defines a project-level convention.

## Generation Utilities

- Use `@utils/generate` for generated identifiers and hashes.
- Keep cryptographic or platform-specific helpers isolated here instead of spreading direct third-party imports across domain and UI packages.
- Do not change hash or identifier semantics without checking all persisted or server-facing usage.

## Dependencies

- Avoid adding heavy dependencies to utilities.
- When adding a dependency, add it to the specific utility package that uses it, not to unrelated workspaces.
- Keep utility functions independent from screen/widget lifecycle concerns.
