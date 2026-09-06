import { radiusMeansurements, scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      padding: scales[24],
      borderRadius: radiusMeansurements.xxl,
      backgroundColor: theme.colors.background.badge.blue,
    },
    title: {
      color: theme.colors.text.base.primary,
    },
    subtitle: {
      marginTop: scales[10],
      color: theme.colors.text.base.primary,
    },
    image: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  });
