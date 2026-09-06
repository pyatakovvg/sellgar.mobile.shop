import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createModeStyles = (theme: TTheme) =>
  StyleSheet.create({
    destructive: {
      color: theme.colors.text.status.destructive,
    },
    success: {
      color: theme.colors.text.status.success,
    },
    through: {
      textDecorationLine: 'line-through',
    },
  });
