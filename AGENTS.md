# AGENTS

## Назначение

Краткий контекст для разработки мобильного приложения Sellgar Shop.

## Кратко

- Монорепозиторий Yarn 4 с `node-modules` linker и единым root-hoisted
  деревом зависимостей; основной клиент — `clients/mobile`.
- Клиент построен на React Native и предназначен для Android и iOS.
- Framework runtime подключён как nested submodule `library/sellgar.app.ui` и
  импортируется только через публичные entrypoints `@sellgar/app` и
  `@sellgar/app/native`.
- Route tokens принадлежат отдельному package `@library/route-tokens`.
- Код приложения не копирует и не изменяет framework implementation внутри
  feature-пакетов.
- Native dependencies, используемые приложением или `@sellgar/app/native`,
  обязательно объявляются напрямую в `clients/mobile/package.json`: только
  зависимости mobile host участвуют в React Native autolinking.

## Входные точки

- `clients/mobile/src/index.tsx` — регистрация React Native application.
- `clients/mobile/src/bootstrap.tsx` — bootstrap framework и native transport.
- `clients/mobile/src/application/mobile.application.tsx` — application
  composition, presentations, initializers и features.
- `clients/mobile/src/application/routes/mobile.router.ts` — route graph.
- `clients/mobile/src/application/bindings/mobile.bindings.ts` — host bindings.

## Пакеты

- `clients/mobile` — mobile host и composition root.
- `clients/mobile/src/pages` — route-level modules.
- `clients/mobile/src/layouts` — application и route layouts.
- `clients/mobile/src/shells` — native shells для вложенного routing.
- `clients/mobile/src/widgets` — reusable framework widgets.
- `library/sellgar.app.ui` — nested submodule и единственный framework runtime
  `@sellgar/app`.
- `library/route-tokens` — стабильные route token contracts.

## Правила

- Navigation выполнять через route tokens и API `@sellgar/app`, без строковых
  внутренних URL.
- Renderer-specific declarations, hooks и presentations импортировать из
  `@sellgar/app/native`; core contracts — из `@sellgar/app`.
- Не импортировать private-файлы из `library/sellgar.app.ui` напрямую.
- Не добавлять ручные roots в `react-native.config.js` для обычных workspace
  dependencies. Local workspace source открывается Metro через `watchFolders`,
  hoisted packages — через корневой `nodeModulesPaths`, а Babel-конфигурация
  остаётся в `clients/mobile`. Корень Metro server покрывает весь workspace,
  чтобы runtime lazy bundles имели адреса без выхода через `../`.
- React Native Gradle Plugin, React Native и Codegen физически находятся в
  корневом `node_modules`; Android paths задаются в `settings.gradle` и
  `android/app/build.gradle`.
- Изменения framework сначала фиксируются в `sellgar.app.ui`, затем обновляется
  gitlink этого репозитория.
- Generated Android/iOS output, local SDK paths и signing secrets не коммитить.

## Проверка

- TypeScript: `yarn workspace @client/mobile typecheck`.
- Metro: `yarn dev:mobile`.
- Android device: `yarn android:mobile`.
- Поведение navigation, gestures, keyboard и presentations проверять на
  физическом устройстве.
