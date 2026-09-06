import { scales, type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    description: {
      color: theme.colors.text.base.secondary,
    },
    header: {
      marginTop: scales[6],
    },
    headerText: {
      color: theme.colors.text.base.primary,
    },
    icon: {
      height: scales[32],
      width: scales[32],
    },
    wrapper: {
      gap: scales[10],
    },
  });
