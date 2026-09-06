import { scales, type TTheme } from '@library/kit';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    close: {
      paddingHorizontal: scales[16],
      paddingVertical: scales[8],
    },
    closeIcon: {
      color: theme.colors.text.base.primary,
      fontSize: scales[24],
    },
    content: {
      alignItems: 'center',
      marginTop: scales[68],
      paddingHorizontal: scales[24],
    },
    numpadIcon: {
      color: theme.colors.background.accent.blue_accent,
      fontSize: scales[32],
    },
    wrapper: {
      flex: 1,
    },
  });
