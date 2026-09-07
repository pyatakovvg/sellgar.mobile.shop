import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    background: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background.surface.neutral,
    },
  });
};
