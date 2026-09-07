# @layout/main

## Scope

Root visual layout of the mobile application. It owns the application-level
background surface and its presentation state, without route- or
feature-specific decisions.

## Public API

- `MainLayout`
- `MainLayout.StylesChangedEvent`
- `MainLayout.BackgroundImageChangedEvent`

## Rules

- Register the layout through `app.layouts(...)` in the mobile application
  composition root.
- Keep the decorated declaration separate from its React Native view.
- Do not add feature-specific screen layout decisions here; keep them in route layouts or screen layouts.
- Publish typed application events when the root background presentation must
  change. Do not introduce private application providers or string event names.
