import { StyleSheet } from 'react-native';

export const shadows = () => {
  return StyleSheet.create({
    lg: {
      // для ios
      shadowColor: 'rgba(20, 21, 26, 0.2)',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowRadius: 16,
      shadowOpacity: 0.2,
      // для android
      elevation: 2,
    },
    xs: {
      // для ios
      shadowColor: 'rgba(20, 21, 26, 0.05)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 2,
      shadowOpacity: 0.05,
      // для android
      elevation: 6,
    },
  });
};
