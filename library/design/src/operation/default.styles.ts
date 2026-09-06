import { scales, type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      flexShrink: 1,
      alignItems: 'center',
    },
    info: {
      flex: 1,
    },
    description: {},
    description_text: {
      includeFontPadding: false,
      color: theme.colors.text.base.primary,
    },
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scales[6],
      marginTop: scales[4],
    },
    status_text: {
      color: theme.colors.text.base.secondary,
    },
    date_text: {
      color: theme.colors.text.base.tertiary,
    },
    amount_status: {
      marginLeft: 16,
      alignItems: 'flex-end',
    },
  });
