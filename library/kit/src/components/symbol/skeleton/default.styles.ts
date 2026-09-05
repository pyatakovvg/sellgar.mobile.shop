import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.badge.green,
      overflow: 'hidden',
      position: 'relative',
    },
    skeleton: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.background.surface.neutral_subtle,
    },
    shimmer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    gradient: {
      flex: 1,
      width: '60%',
    },
  });
};
