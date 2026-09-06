import { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {},
    label_text: {
      color: theme.colors.text.base.secondary,
    },
    divider: {
      flexGrow: 1,
      height: 1,
      backgroundColor: theme.colors.border.base.divider,
      marginHorizontal: 12,
    },
    value: {},
    value_text: {
      color: theme.colors.text.base.primary,
    },
  });
