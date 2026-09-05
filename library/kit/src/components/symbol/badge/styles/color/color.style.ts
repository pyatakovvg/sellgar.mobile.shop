import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createColorStyle = (
  theme: TTheme,
  color:
    | 'gray'
    | 'blue'
    | 'green'
    | 'red'
    | 'orange'
    | 'purple'
    | 'white'
    | 'surface'
    | 'white-destructive'
    | 'surface-destructive'
    | 'white-info'
    | 'surface-info'
    | 'white-success'
    | 'surface-success',
) => {
  switch (color) {
    case 'blue':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.blue,
        },
        text: {
          color: theme.colors.text.accent.blue_inverted,
        },
        icon: {
          color: theme.colors.icon.accent.blue_inverted,
        },
      });
    case 'green':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.green,
        },
        text: {
          color: theme.colors.text.accent.green_inverted,
        },
        icon: {
          color: theme.colors.icon.accent.green_inverted,
        },
      });
    case 'orange':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.orange,
        },
        text: {
          color: theme.colors.text.accent.orange_inverted,
        },
        icon: {
          color: theme.colors.icon.accent.orange_inverted,
        },
      });
    case 'red':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.red,
        },
        text: {
          color: theme.colors.text.accent.red_inverted,
        },
        icon: {
          color: theme.colors.icon.accent.red_inverted,
        },
      });
    case 'purple':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.purple,
        },
        text: {
          color: theme.colors.text.accent.purple_inverted,
        },
        icon: {
          color: theme.colors.icon.accent.purple_inverted,
        },
      });
    case 'white':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.white,
        },
        text: {
          color: theme.colors.text.base.static_dark_secondary,
        },
        icon: {
          color: theme.colors.icon.base.static_dark_secondary,
        },
      });
    case 'surface':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.surface,
        },
        text: {
          color: theme.colors.text.base.secondary,
        },
        icon: {
          color: theme.colors.icon.base.secondary,
        },
      });
    case 'white-destructive':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.surface,
        },
        text: {
          color: theme.colors.text.status.destructive_secondary,
        },
        icon: {
          color: theme.colors.icon.status.destructive_secondary,
        },
      });
    case 'surface-destructive':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.surface,
        },
        text: {
          color: theme.colors.text.status.destructive_secondary,
        },
        icon: {
          color: theme.colors.icon.status.destructive_secondary,
        },
      });
    case 'white-info':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.white,
        },
        text: {
          color: theme.colors.text.status.info,
        },
        icon: {
          color: theme.colors.icon.status.info_secondary,
        },
      });
    case 'surface-info':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.surface,
        },
        text: {
          color: theme.colors.text.status.info,
        },
        icon: {
          color: theme.colors.icon.status.info_secondary,
        },
      });
    case 'white-success':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.white,
        },
        text: {
          color: theme.colors.text.status.success,
        },
        icon: {
          color: theme.colors.icon.status.success_secondary,
        },
      });
    case 'surface-success':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.surface,
        },
        text: {
          color: theme.colors.text.status.success,
        },
        icon: {
          color: theme.colors.icon.status.success_secondary,
        },
      });
    default: {
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.gray,
        },
        text: {
          color: theme.colors.text.base.secondary,
        },
        icon: {
          color: theme.colors.icon.base.secondary,
        },
      });
    }
  }
};
