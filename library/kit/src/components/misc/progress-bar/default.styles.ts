import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: 4,
      backgroundColor: 'rgba(255,255,255,0.46)',
      borderRadius: 2,
      overflow: 'hidden',
    },
    bar: {
      height: '100%',
      borderRadius: 2,
    },
  });
