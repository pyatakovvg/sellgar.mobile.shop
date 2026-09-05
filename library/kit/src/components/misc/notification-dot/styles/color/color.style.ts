import { TTheme } from '../../../../../theme';

import { StyleSheet } from 'react-native';

export const createColorStyle = (theme: TTheme, color: 'gray' | 'green' | 'blue' | 'orange' | 'red' | 'purple') => {
  switch (color) {
    case 'gray':
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.gray_accent,
        },
      });
    case 'green':
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.green_accent,
        },
      });
    case 'blue':
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.blue_accent,
        },
      });
    case 'orange':
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.accent_orange,
        },
      });
    case 'purple':
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.accent_purple,
        },
      });
    case 'red':
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.accent_red,
        },
      });
    default:
      return StyleSheet.create({
        color: {
          backgroundColor: theme.colors.background.accent.gray_accent,
        },
      });
  }
};
