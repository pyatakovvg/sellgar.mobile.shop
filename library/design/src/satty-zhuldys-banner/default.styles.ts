import { radiusMeansurements, scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scales[24],
      borderRadius: radiusMeansurements.xxl,
      backgroundColor: theme.colors.background.badge.blue,
    },
    content: {
      gap: scales[10],
    },
    title: {
      color: theme.colors.text.base.primary,
    },
    subtitle: {
      color: theme.colors.text.base.primary,
    },
    image: {
      // position: 'absolute',
      // bottom: 0,
      // right: 0,
    },
  });
