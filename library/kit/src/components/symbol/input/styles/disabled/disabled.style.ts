import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createDisabledStyle = (theme: TTheme, type?: 'default' | 'borderless') => {
  switch (type) {
    case 'borderless':
      return StyleSheet.create({
        wrapper: {},
        element: {
          color: theme.colors.text.base.quaternary,
        },
        icon: {
          color: theme.colors.icon.base.quaternary,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          borderColor: theme.colors.border.action.disabled,
          backgroundColor: theme.colors.background.input.disabled,
        },
        element: {
          color: theme.colors.text.base.quaternary,
        },
        icon: {
          color: theme.colors.icon.base.quaternary,
        },
      });
  }
};
