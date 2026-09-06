import { scales, type TTheme } from '@library/kit';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    actions: {
      paddingHorizontal: scales[20],
    },
    content: {
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: scales[20],
      paddingTop: scales[100],
    },
    icon: {
      color: theme.colors.icon.status.destructive,
      fontSize: scales[80],
    },
    link: {
      color: theme.colors.text.status.info,
    },
    message: {
      color: theme.colors.text.base.secondary,
      marginTop: scales[12],
      textAlign: 'center',
    },
    title: {
      marginTop: scales[24],
      textAlign: 'center',
    },
  });
