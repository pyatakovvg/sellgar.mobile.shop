import { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      width: 272,
    },
    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      paddingVertical: 32,
      paddingHorizontal: 24,
    },
    icon: {
      fontSize: 40,
      color: theme.colors.icon.status.info,
    },
    description: {
      marginTop: 8,
    },
    description_text: {
      textAlign: 'center',
      color: theme.colors.text.base.secondary,
    },
  });
