import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    amount_text: {
      color: theme.colors.text.base.primary,
    },
    currency_text: {
      marginLeft: 4,
      color: theme.colors.text.base.quaternary,
    },
  });
