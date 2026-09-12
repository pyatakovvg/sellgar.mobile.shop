import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createStyleStyle = (theme: TTheme, style: 'primary' | 'secondary' | 'tertiary' | 'ghost') => {
  switch (style) {
    case 'secondary':
      return StyleSheet.create({
        wrapper: {
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: theme.colors.border.action.normal,
          backgroundColor: theme.colors.background.button.secondary,
        },
        text: {
          color: theme.colors.text.base.primary,
        },
        icon: {
          color: theme.colors.icon.base.primary,
        },
      });
    case 'tertiary':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.tertiary,
        },
        text: {
          color: theme.colors.text.base.primary,
        },
        icon: {
          color: theme.colors.icon.base.primary,
        },
      });
    case 'ghost':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.ghost,
        },
        text: {
          color: theme.colors.text.base.secondary,
        },
        icon: {
          color: theme.colors.text.base.secondary,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.primary,
        },
        text: {
          color: theme.palette.base.white,
        },
        icon: {
          color: theme.palette.base.white,
        },
      });
  }
};
