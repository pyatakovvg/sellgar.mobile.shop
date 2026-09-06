import { scales } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    form: {
      marginBottom: scales[10],
      marginTop: scales[44],
    },
    loader: {
      marginTop: scales[24],
    },
    timer: {
      marginTop: scales[24],
    },
    wrapper: {
      flex: 1,
    },
  });
