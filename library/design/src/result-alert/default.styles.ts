import { scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      // backgroundColor: 'red',
      justifyContent: 'center',
      paddingHorizontal: scales[16],
      paddingVertical: scales[32],
    },
    icon: {
      width: scales[72],
      height: scales[72],
      alignSelf: 'center',
    },
    title: {
      marginTop: scales[24],
      textAlign: 'center',
      color: theme.colors.text.base.primary,
    },
    description: {
      marginTop: scales[6],
      textAlign: 'center',
      color: theme.colors.text.base.secondary,
    },
    control: {
      marginTop: scales[24],
    },
  });
