import { scales } from '@library/kit';
import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    content: {
      alignItems: 'center',
      marginTop: scales[68],
      paddingHorizontal: scales[24],
    },
    wrapper: {
      flex: 1,
    },
  });
