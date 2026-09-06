import { radiusMeansurements, scales, shadows, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      ...shadows().lg,
    },
    content: {
      width: scales[86],
      height: scales[86],
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radiusMeansurements.xl,
      backgroundColor: 'pink',
    },
    image: {
      width: scales[65],
      height: scales[34],
    },
  });
