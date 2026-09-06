import type { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text.base.tertiary,
    },
    wrapper: {
      alignItems: 'center',
    },
  });
