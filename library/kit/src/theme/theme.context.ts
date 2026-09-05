import React from 'react';
import { ColorSchemeName } from 'react-native';

import { themeCreate } from './theme.create.ts';

export type TTheme = ReturnType<typeof themeCreate>;
export type TThemeMode = ColorSchemeName | null;

interface IContext {
  theme: TTheme;
  colorScheme: ColorSchemeName;
  toggleColorScheme(mode: TThemeMode): void;
}

export const context = React.createContext({} as IContext);
export const Provider = context.Provider;
