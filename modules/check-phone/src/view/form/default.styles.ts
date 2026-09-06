import { scales, type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    link: {
      color: theme.colors.text.status.info,
    },
    privacy: {
      color: theme.colors.text.base.tertiary,
      marginTop: scales[6],
      textAlign: 'center',
    },
    tailIcon: {
      color: theme.colors.icon.accent.blue_accent,
    },
    wrapper: {
      flexDirection: 'column',
    },
  });
