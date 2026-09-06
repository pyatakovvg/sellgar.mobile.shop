import { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createTypeStyle = (theme: TTheme, type: 'withdrawal' | 'payService' | 'topUp') => {
  switch (type) {
    case 'topUp':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.primary,
        },
        text: {
          color: theme.colors.text.base.static_white,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.blue,
        },
        text: {
          color: theme.colors.text.base.primary,
        },
      });
  }
};
