import { scales, type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      gap: scales[10],
    },
    icon: {
      width: scales[32],
      height: scales[32],
    },
    header: {
      marginTop: scales[6],
    },
    header_text: {
      color: theme.colors.text.base.primary,
    },
    description_text: {
      color: theme.colors.text.base.secondary,
    },
  });
