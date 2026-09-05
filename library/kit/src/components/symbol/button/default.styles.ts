import { Platform, StyleSheet } from 'react-native';
import { scales } from '../../../theme';

export const createStyle = () => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
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
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: Platform.OS === 'android' ? 'Geologica Roman Medium' : 'Geologica Roman',
    },
    badge: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    tailIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loader: {
      marginRight: scales[4],
    },
  });
};
