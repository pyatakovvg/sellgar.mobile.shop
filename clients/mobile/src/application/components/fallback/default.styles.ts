import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      gap: 16,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      backgroundColor: theme.colors.background.surface.default,
    },
    text: { color: theme.colors.text.base.primary },
  });
};
