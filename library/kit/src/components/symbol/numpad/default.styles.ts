import { StyleSheet } from 'react-native';

export const createStyles = () => {
  return StyleSheet.create({
    wrapper: {
      marginVertical: -11,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 11,
      marginHorizontal: -11,
    },
    col: {
      paddingHorizontal: 11,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomCol: {
      flex: 1,
    },
  });
};
