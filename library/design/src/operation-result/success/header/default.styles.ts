import { scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      paddingHorizontal: scales[24],
    },
    icon: {
      color: theme.colors.icon.status.success,
      fontSize: 40,
    },
    content: {
      textAlign: 'center',
      marginTop: scales[24],
      color: theme.colors.text.base.primary,
    },
    description: {
      marginTop: scales[8],
      textAlign: 'center',
      color: theme.colors.text.base.secondary,
    },
    link: {
      color: theme.colors.text.status.info,
    },
  });
