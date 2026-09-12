# @layout/tabs

## Scope

Authenticated navigation layout. It owns the tab bar composition around the
active route content.

## Public API

- `TabsLayout`

## Rules

- Register the layout on the authenticated routing branch.
- Keep the decorated declaration separate from its React Native view.
- Import widgets and route tokens only through their package facades.
