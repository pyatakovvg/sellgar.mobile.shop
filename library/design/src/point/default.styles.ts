import { radiusMeansurements, scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    content: {
      flex: 1,
    },
    numberView: {
      width: scales[32],
      height: scales[32],
      borderRadius: radiusMeansurements.md,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background.button.ghost_hover,
      marginRight: scales[18],
    },
    text: {
      color: theme.colors.text.base.secondary,
    },
  });
