import { scales, shadows, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper_active: {
      borderWidth: 1,
      borderColor: theme.colors.border.action.normal,
      backgroundColor: theme.colors.background.button.secondary,
      ...shadows().xs,
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.icon.base.secondary,
    },
    title: {
      paddingHorizontal: scales[4],
      color: theme.colors.text.base.secondary,
    },
    title_active: {
      color: theme.colors.text.base.primary,
    },
    badge: {
      paddingHorizontal: scales[4],
    },
  });
