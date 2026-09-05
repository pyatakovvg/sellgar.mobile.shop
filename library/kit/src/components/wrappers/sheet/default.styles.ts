import { StyleSheet } from 'react-native';

import { radiusMeansurements, scales, TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingHorizontal: scales[24],
      paddingTop: scales[20],
      backgroundColor: theme.colors.background.surface.default,
      borderTopLeftRadius: radiusMeansurements.xxl,
      borderTopRightRadius: radiusMeansurements.xxl,
    },
  });
};
