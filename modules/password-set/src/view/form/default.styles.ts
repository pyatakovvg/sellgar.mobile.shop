import { scales, type TTheme } from '@library/kit';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    field: {
      marginTop: scales[16],
    },
    tailIcon: {
      color: theme.colors.icon.accent.blue_accent,
    },
  });
