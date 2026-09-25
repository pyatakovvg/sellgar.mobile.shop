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

## Владение зависимостями

`@client/mobile` предоставляет Babel, Metro, TypeScript, React, React Native и
нативные библиотеки. Framework не объявляет их в `dependencies` или
`devDependencies`: платформенные runtime-зависимости описаны как optional peers,
а инструменты сборки принадлежат host.

Внутренние зависимости framework — `inversify`, `mobx`, `mobx-react` и
`react-error-boundary`. Web-only peers не нужно добавлять в mobile host.

Host также предоставляет обязательные peers `class-transformer`,
`class-validator` и `reflect-metadata`. Workspace-пакет, который подключает
framework или другой пакет с этими требованиями, объявляет их в
`peerDependencies`, если они ещё не являются его прямыми зависимостями.
Наличие библиотеки в корневом `node_modules` само по себе не заменяет декларацию.

После изменения manifest framework нужно выполнить `yarn` из корня монорепы.
Обновление нативных библиотек требует пересборки приложения; перезапуск Metro
не обновляет native binary. Git submodule обновляется отдельно от Yarn, с
сохранением локальных изменений.

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
