import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createModeStyles = (theme: TTheme) =>
  StyleSheet.create({
    destructive: {
      color: theme.colors.text.status.destructive,
    },
    secondary: {
      color: theme.colors.text.base.secondary,
    },
    through: {
      textDecorationLine: 'line-through',
    },
  });
