import { Platform, StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leadIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      fontFamily: Platform.OS === 'android' ? 'Geologica Roman SemiBold' : 'Geologica Roman',
      fontWeight: theme.typography.weight.semi_bold,
    },
    tailIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
