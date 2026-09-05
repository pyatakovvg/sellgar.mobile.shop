import { Platform, StyleSheet } from 'react-native';

import { radiusMeansurements, scales, TTheme } from '../../../theme';

export const createStyles = (theme: TTheme, error: boolean) => {
  return StyleSheet.create({
    wrapper: {},
    container: {},
    input: {
      width: scales[44],
      height: scales[44],
      backgroundColor: error ? theme.colors.background.badge.red_disabled : theme.colors.background.chip.secondary,
      borderRadius: radiusMeansurements.sm,
      borderWidth: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    text: {
      fontFamily: Platform.OS === 'android' ? 'Geologica Roman Medium' : 'Geologica Roman',
      fontWeight: theme.typography.weight.medium,
      lineHeight: Platform.OS === 'android' ? theme.typography.fontSize.h5 : undefined,
      fontSize: theme.typography.fontSize.h5,
      color: error ? theme.colors.text.status.destructive_secondary : theme.colors.text.base.primary,
    },
    stick: {
      backgroundColor: theme.colors.text.base.primary,
      height: scales[30],
    },
  });
};
