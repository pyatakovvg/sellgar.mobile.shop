# Sellgar Mobile Shop

React Native monorepo for the Sellgar mobile shop application.

## Workspaces

- `clients/mobile` — React Native host for Android and iOS.
- `library/route-tokens` — application route identities.
- `library/sellgar.app.ui` — shared `@sellgar/app` framework submodule.

The repository uses Yarn 4 with the `node-modules` linker and a single
root-hoisted dependency tree. Native packages used by the application or by a
workspace library must also be declared directly by `@client/mobile` so React
Native autolinking can discover them.

## Commands

Run commands from the repository root:

```bash
yarn
yarn typecheck
yarn start
yarn android
```

Legacy aliases `yarn dev:mobile` and `yarn android:mobile` remain available for
workspace-level development scripts.
