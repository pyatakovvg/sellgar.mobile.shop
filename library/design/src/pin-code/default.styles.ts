import { StyleSheet } from 'react-native';
import { scales, TTheme } from '@library/kit';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    header: {
      alignItems: 'center',
    },
    headerText: {
      textAlign: 'center',
      color: theme.colors.text.base.primary,
    },
    errorHeaderText: {
      color: theme.colors.text.status.destructive,
    },
    dots: {
      marginTop: scales[16],
      alignItems: 'center',
    },
    content: {
      marginTop: scales[59],
    },
    bottomSlot: {
      marginTop: 18,
    },
  });
};
