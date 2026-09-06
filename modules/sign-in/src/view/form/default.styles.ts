import { scales, type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    tailIcon: {
      color: theme.colors.icon.accent.blue_accent,
    },
    wrapper: {
      gap: scales[16],
    },
  });
