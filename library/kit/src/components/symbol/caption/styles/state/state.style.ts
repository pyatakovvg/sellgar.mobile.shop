import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createStateStyle = (theme: TTheme, state?: 'info' | 'success' | 'destructive') => {
  switch (state) {
    case 'info':
      return StyleSheet.create({
        icon: {
          color: theme.colors.icon.status.info,
        },
        caption_text: {
          color: theme.colors.text.status.info,
        },
      });

    case 'success':
      return StyleSheet.create({
        icon: {
          color: theme.colors.icon.status.success,
        },
        caption_text: {
          color: theme.colors.text.status.success,
        },
      });

    case 'destructive':
      return StyleSheet.create({
        icon: {
          color: theme.colors.icon.status.destructive,
        },
        caption_text: {
          color: theme.colors.text.status.destructive,
        },
      });

    default:
      return StyleSheet.create({
        icon: {
          color: theme.colors.icon.base.tertiary,
        },
        caption_text: {
          color: theme.colors.text.base.tertiary,
        },
      });
  }
};
