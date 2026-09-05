import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../../theme';

export const createSizeStyle = (theme: TTheme, size: 'md' | 'sm') => {
  switch (size) {
    case 'sm':
      return StyleSheet.create({
        wrapper: {
          width: 16,
          height: 16,
        },
        icon: {
          fontSize: theme.typography.fontSize.caption_m,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          width: 20,
          height: 20,
        },
        icon: {
          fontSize: theme.typography.fontSize.caption_l,
        },
      });
  }
};
