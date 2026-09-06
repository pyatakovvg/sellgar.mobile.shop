import { StyleSheet } from 'react-native';
import { scales } from '@library/kit';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'space-between',
    },
    content: {
      paddingHorizontal: scales[16],
    },
    control: {},
  });
