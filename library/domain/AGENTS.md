# @library/domain

## Scope

Пакет владеет предметными frontend-срезами, их application contracts, gateway-адаптерами и общей технической infrastructure мобильного приложения.

## Structure

- `src/classes/<slice>/domain` — entities, value objects, domain types and constants.
- `src/classes/<slice>/application` — service/use-case contracts, implementations, inputs and domain errors.
- `src/classes/<slice>/data/<role>` — gateway/storage ports and implementations, transport DTOs and local data sources.
- `src/classes/<slice>/<slice>.binding.ts` — private DI composition of a slice.
- `src/infrastructure/<component>` — config, HTTP, storage and native adapters with their bindings.
- `src/classes/domain.binding.ts` — aggregate package composition.
- `src/index.ts` — the package facade for external consumers; slice and infrastructure directories expose their own
  internal facades.

## Boundaries

- Consumers use only exports from `@library/domain`.
- A slice imports another slice through its public directory facade (`from '../slice'`), never through an explicit
  `/index.ts` path or an implementation file.
- Consumers of an infrastructure component follow the same rule: import from
  `infrastructure/<component>`, never from its internal files.
- Data ports and their unchanged operation Inputs belong to `data/<role>`; application may depend on those ports,
  but data must never import application contracts.
- Slice-specific storage ports remain internal to their slice. UI and other slices use public application
  operations instead of injecting storage ports directly.
- Gateway implementations, data ports, concrete services and slice bindings are package internals.
- Application `*Input` models are internal implementation details and are not exported from slice or package facades.
- Domain code must not import modules, widgets, views, layouts or other UI packages.
- One class, interface, type, enum or error belongs to one production file.
- Do not introduce `common`, `shared`, `helpers` or a global DI container.

## DI

- Use `Inject`, `Injectable`, `BindingModuleInterface` and `BindingRegistryInterface` from `@sellgar/app`.
- Every new runtime dependency must be registered in the owning slice/infrastructure binding and composed by `DomainBinding`.
- The application host registers `DomainBinding` in its application scope.

## Contracts

- Controllers depend on public service/use-case interfaces, never on gateways or concrete implementations.
- Application request models use `*Input`; transport-only response DTOs remain in `data`, while models returned through public domain contracts belong to `domain`.
- HTTP gateways validate response entities at the boundary with `plainToInstance` and `validateOrReject` where the existing contract requires it.
- Domain and infrastructure exceptions extend the public `Exception` contract from `@sellgar/app`; do not introduce
  custom exceptions by extending the native `Error` directly.
- Do not change backend field names, request shapes or service method signatures as part of a structural move.
