import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createTargetStyle = (
  theme: TTheme,
  style: 'primary' | 'secondary' | 'tertiary' | 'ghost',
  target?: 'destructive' | 'success' | 'info',
) => {
  switch (target) {
    case 'destructive':
      switch (style) {
        case 'primary':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive,
            },
            text: {
              color: theme.colors.text.base.static_white,
            },
            icon: {
              color: theme.colors.icon.base.static_white,
            },
          });
        case 'secondary':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_secondary,
            },
            text: {
              color: theme.colors.text.status.destructive,
            },
            icon: {
              color: theme.colors.icon.status.destructive,
            },
          });
        case 'tertiary':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_tertiary,
            },
            text: {
              color: theme.colors.text.status.destructive,
            },
            icon: {
              color: theme.colors.icon.status.destructive,
            },
          });
        case 'ghost':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.button.destructive_ghost,
            },
            text: {
              color: theme.colors.text.status.destructive,
            },
            icon: {
              color: theme.colors.icon.status.destructive,
            },
          });
      }
    case 'success':
      switch (style) {
        case 'primary':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.surface.success_accent,
            },
            text: {
              color: theme.colors.text.base.static_white,
            },
            icon: {
              color: theme.colors.icon.base.static_white,
            },
          });
      }
    case 'info':
      switch (style) {
        case 'primary':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.surface.info_accent,
            },
            text: {
              color: theme.colors.text.base.static_white,
            },
            icon: {
              color: theme.colors.icon.base.static_white,
            },
          });

        case 'tertiary':
          return StyleSheet.create({
            wrapper: {
              backgroundColor: theme.colors.background.surface.info,
            },
            text: {
              color: theme.colors.text.status.info,
            },
            icon: {
              color: theme.colors.icon.status.info,
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
