import { scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: scales[16],
    },
    header: {},
    container: {
      flex: 1,
      paddingHorizontal: scales[32],
    },
  });
};
