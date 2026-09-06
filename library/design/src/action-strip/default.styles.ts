import { scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      padding: scales[8],
      borderRadius: theme.numbers.radius.lg,
      borderStyle: 'solid',
      borderColor: theme.colors.border.base.alpha,
      backgroundColor: theme.colors.background.surface.default,
      alignItems: 'center',
    },
    icon: {
      width: 20,
      height: 20,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    lead_icon: {
      fontSize: 20,
      color: theme.colors.icon.base.secondary,
    },
    content: {
      flexDirection: 'column',
      marginLeft: 12,
      flex: 1,
    },
    text: {
      color: theme.colors.text.base.primary,
    },
    description: {
      marginTop: 4,
      color: theme.colors.text.base.secondary,
    },
    tailIcon: {
      fontSize: 20,
      color: theme.colors.icon.base.secondary,
    },
  });
