import { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
    },
    icon: {
      color: theme.colors.icon.status.warning,
      fontSize: 40,
    },
    content: {
      textAlign: 'center',
      marginTop: 8,
      color: theme.colors.text.base.primary
    },
    description: {
      marginTop: 8,
      color: theme.colors.text.base.secondary,
      textAlign: 'center',
    },
    linkText: {
      color: theme.colors.text.status.info,
    }
  });
