import { scales } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingHorizontal: scales[24],
      paddingBottom: scales[56],
      paddingTop: scales[104],
    },
  });
