# @library/kit

## Роль
Базовая UI-библиотека: примитивные компоненты (кнопки, инпуты, тексты, иконки), тема приложения, система масштабирования. Фундамент для `@library/design` и всех виджетов/экранов.

## Состав
```
src/
├── components/                       # Базовые UI-компоненты
│   └── (Button, Input, Text, Icon, и др.)
└── theme/
    ├── theme.context.ts              # React Context темы
    ├── theme.provider.tsx            # Provider обёртка
    ├── numbers/
    │   └── scales.ts                 # Коэффициенты масштабирования (ширина/высота)
    └── (цвета, шрифты, spacing)
```

## Зависимости
**Внешние:** React Native, react-native-linear-gradient, react-native-svg, react-native-reanimated, react-native-otp-entry, react-native-mask-text, react-number-format

## Точки внимания
- **`scales`** из `@library/kit/theme/numbers/scales` — единственный источник размеров. Не использовать magic numbers.
- **`default.styles.ts`** — стандартное имя файла стилей в каждом компоненте/экране. StyleSheet всегда создаётся через хук темы (получает цвета/шрифты из контекста).
- Этот пакет **не зависит** от других локальных пакетов — он основание дерева зависимостей.

## Что важно помнить
- Все UI-примитивы берутся отсюда, а не напрямую из React Native.
- `ThemeProvider` должен быть на верхнем уровне дерева компонентов.
- Стили не инлайнить — всегда `default.styles.ts` рядом с компонентом.
