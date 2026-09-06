import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      flex: 0,
    },
    dots: { height: 44, justifyContent: 'center' },
    dot: { paddingHorizontal: 2 },
    amount_text: {
      color: theme.colors.text.base.primary,
    },
    currency: {
      marginLeft: 8,
    },
    currency_text: {
      color: theme.colors.text.base.tertiary,
    },
  });
