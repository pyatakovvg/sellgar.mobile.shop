import { scales } from '@library/kit';

import { StyleSheet } from 'react-native';

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
