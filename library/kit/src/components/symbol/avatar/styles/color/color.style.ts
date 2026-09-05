import { TTheme } from '../../../../../theme';

import { StyleSheet } from 'react-native';

export const createColorStyle = (theme: TTheme, color: 'gray' | 'green' | 'blue' | 'orange' | 'red' | 'purple') => {
  switch (color) {
    case 'gray':
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.gray_subtle,
        },
        icon: {
          color: theme.colors.icon.base.secondary,
        },
      });
    case 'green':
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.accent_green_subtle,
        },
        icon: {
          color: theme.colors.icon.accent.green,
        },
      });
    case 'blue':
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.blue_accent,
        },
        icon: {
          color: theme.colors.icon.base.static_white,
        },
      });
    case 'orange':
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.accent_orange_subtle,
        },
        icon: {
          color: theme.colors.icon.accent.orange,
        },
      });
    case 'purple':
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.accent_purple_subtle,
        },
        icon: {
          color: theme.colors.icon.accent.purple,
        },
      });
    case 'red':
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.accent_red_subtle,
        },
        icon: {
          color: theme.colors.icon.accent.red,
        },
      });
    default:
      return StyleSheet.create({
        content: {
          backgroundColor: theme.colors.background.accent.blue_accent,
        },
        icon: {
          color: theme.colors.icon.base.static_white,
        },
      });
  }
};
