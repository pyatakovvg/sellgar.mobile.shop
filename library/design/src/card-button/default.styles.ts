import { radiusMeansurements, scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: scales[20],
      paddingHorizontal: scales[8],
      gap: scales[8],
      borderRadius: radiusMeansurements.xl,
      backgroundColor: theme.colors.background.button.secondary,
    },
    cardIconView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardIcon: {
      fontSize: 20,
      color: theme.colors.icon.base.secondary,
    },
    text: {
      flex: 1,
      color: theme.colors.text.base.primary,
    },
    tailIconView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: scales[4],
    },
    tailIcon: {
      width: scales[35],
      height: scales[24],
    },
    deleteIconView: {
      alignItems: 'center',
      justifyContent: 'center',
      width: scales[40],
      height: scales[40],
    },
    deleteIcon: {
      fontSize: scales[20],
    },
  });
