import { scales } from '@library/kit';
import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    content: {
      marginTop: scales[44],
    },
    wrapper: {
      flex: 1,
      marginTop: scales[68],
      paddingHorizontal: scales[24],
    },
  });
