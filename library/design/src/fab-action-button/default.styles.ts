import { radiusMeansurements, scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 248,
      gap: scales[8],
      paddingHorizontal: scales[24],
      paddingVertical: scales[16],
      borderWidth: 1,
      borderColor: theme.colors.border.action.info_hover,
      borderRadius: radiusMeansurements.full,
    },
    icon: {
      width: scales[32],
      height: scales[32],
    },
  });
