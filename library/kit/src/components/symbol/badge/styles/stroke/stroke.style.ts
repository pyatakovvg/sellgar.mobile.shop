import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createStrokeStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border.base.alpha,
    },
  });
};
