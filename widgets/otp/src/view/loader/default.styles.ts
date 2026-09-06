import type { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    icon: {
      color: theme.colors.text.base.primary,
      fontSize: 30,
    },
    wrapper: {
      alignItems: 'center',
    },
  });
