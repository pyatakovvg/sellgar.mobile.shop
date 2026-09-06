import { scales, type TTheme } from '@library/kit';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    icon: {
      fontSize: scales[16],
      marginRight: scales[10],
    },
    item: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    itemText: {
      color: theme.colors.text.base.tertiary,
    },
    wrapper: {
      gap: scales[12],
      marginTop: scales[12],
    },
  });
