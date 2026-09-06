import { radiusMeansurements, scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {},
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      backgroundColor: theme.colors.background.overlay.active_normal,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      maxWidth: scales[120],
      textAlign: 'center',
    },
    icon: {
      objectFit: 'contain',
      overflow: 'hidden',
    },
    containerMd: {
      borderRadius: radiusMeansurements.xl,
      height: scales[120],
      width: scales[120],
    },
    containerSm: {
      borderRadius: 8,
      height: 80,
      justifyContent: 'center',
    },
    contentMd: {
      marginTop: 8,
    },
    contentSm: {},
  });
