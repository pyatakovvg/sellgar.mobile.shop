import { radiusMeansurements, scales, shadows, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      width: scales[78],
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: scales[60],
      height: scales[60],
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: radiusMeansurements.xl,
    },
    inactive: {
      backgroundColor: theme.colors.background.surface.default,
      ...shadows().xs,
    },
    text: {
      marginTop: scales[6],
      textAlign: 'center',
    },
    icon: {
      fontSize: 32,
    },
    icon_active: {
      color: theme.colors.icon.base.static_white,
    },
    icon_inactive: {
      color: theme.colors.icon.accent.blue_accent,
    },
  });
