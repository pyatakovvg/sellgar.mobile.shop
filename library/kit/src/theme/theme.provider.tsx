import React from 'react';

import { Appearance, StatusBar, useColorScheme, type ColorSchemeName } from 'react-native';

import { Provider, type TThemeMode } from './theme.context.ts';
import { themeCreate } from './theme.create.ts';

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  const currentColorScheme = useColorScheme();
  const colorScheme: ColorSchemeName = currentColorScheme === 'dark' ? 'dark' : 'light';

  const theme = React.useMemo(() => themeCreate(colorScheme), [colorScheme]);

  const toggleColorScheme = React.useCallback((mode: TThemeMode) => {
    Appearance.setColorScheme(mode ?? 'auto');
  }, []);

  const value = React.useMemo(
    () => ({
      theme,
      colorScheme,
      toggleColorScheme,
    }),
    [colorScheme, theme, toggleColorScheme],
  );

  return (
    <Provider value={value}>
      <StatusBar barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
      {props.children}
    </Provider>
  );
};
