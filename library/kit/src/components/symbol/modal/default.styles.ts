import { StyleSheet } from 'react-native';

import { scales, shadows } from '../../../theme';

export const createStyle = () => {
  return StyleSheet.create({
    modal: {
      flex: 1,
      margin: 0,
    },
    wrapper: {
      flex: 0,
      ...shadows().xs,
      padding: scales[24],
    },
  });
};
