import React from 'react';

import { Appearance, ColorSchemeName, StatusBar } from 'react-native';

import { Provider } from './theme.context.ts';
import { themeCreate } from './theme.create.ts';

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeName>(() => {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme === 'dark' ? 'dark' : 'light';
  });

  React.useEffect(() => {
    const listener = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      if (colorScheme === 'dark' || colorScheme === 'light') {
        setColorScheme(colorScheme);
      } else {
        setColorScheme('light');
      }
    };

    const subscription = Appearance.addChangeListener(listener);

    return () => subscription.remove();
  }, []);

  const theme = React.useMemo(() => themeCreate(colorScheme), [colorScheme]);

  const toggleColorScheme = React.useCallback((mode: ColorSchemeName | null) => {
    if (mode) {
      setColorScheme(mode);
      return;
    }
    setColorScheme(Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');
  }, []);

  return (
    <Provider
      value={{
        theme,
        colorScheme,
        toggleColorScheme,
      }}
    >
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.background.surface.neutral}
        translucent
      />
      {props.children}
    </Provider>
  );
};
