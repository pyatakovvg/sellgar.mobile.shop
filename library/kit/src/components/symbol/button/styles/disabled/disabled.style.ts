import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createDisabledStyle = (
  theme: TTheme,
  style: 'primary' | 'secondary' | 'tertiary' | 'ghost',
  target?: 'destructive' | 'success' | 'info',
) => {
  switch (style) {
    case 'primary':
      switch (target) {
        default:
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.primary_disabled,
            },
            text: {
              color: theme.colors.text.base.quaternary,
            },
            icon: {
              color: theme.colors.icon.base.quaternary,
            },
          });
        case 'destructive':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_disabled,
            },
            text: {
              color: theme.colors.text.status.destructive_tertiary,
            },
            icon: {
              color: theme.colors.icon.status.destructive_tertiary,
            },
          });
        case 'info':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.badge.blue_disabled,
            },
            text: {
              color: theme.colors.text.base.quaternary,
            },
            icon: {
              color: theme.colors.icon.base.quaternary,
            },
          });
        case 'success':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.badge.green_disabled,
            },
            text: {
              color: theme.colors.text.base.quaternary,
            },
            icon: {
              color: theme.colors.icon.base.quaternary,
            },
          });
      }
    case 'secondary':
      switch (target) {
        default:
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.secondary_disabled,
            },
            text: {
              color: theme.colors.text.base.quaternary,
            },
            icon: {
              color: theme.colors.icon.base.quaternary,
            },
          });
        case 'destructive':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_secondary_disabled,
            },
            text: {
              color: theme.colors.text.status.destructive_tertiary,
            },
            icon: {
              color: theme.colors.icon.status.destructive_tertiary,
            },
          });
      }
    case 'tertiary':
      switch (target) {
        default:
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.tertiary_disabled,
            },
            text: {
              color: theme.colors.text.base.quaternary,
            },
            icon: {
              color: theme.colors.icon.base.quaternary,
            },
          });
        case 'destructive':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_tertiary_disabled,
            },
            text: {
              color: theme.colors.text.status.destructive_tertiary,
            },
            icon: {
              color: theme.colors.icon.status.destructive_tertiary,
            },
          });
      }
    case 'ghost':
      switch (target) {
        default:
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.ghost_disabled,
            },
            text: {
              color: theme.colors.text.base.quaternary,
            },
            icon: {
              color: theme.colors.icon.base.quaternary,
            },
          });
        case 'destructive':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_ghost_disabled,
            },
            text: {
              color: theme.colors.text.status.destructive_tertiary,
            },
            icon: {
              color: theme.colors.icon.status.destructive_tertiary,
            },
          });
      }
  }

  return StyleSheet.create({
    wrapper: {},
    text: {},
    icon: {},
  });
};
