import { StyleSheet } from 'react-native';

import { shadows, TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      borderRadius: theme.numbers.radius.xxl,
      // borderWidth: 1,
      // borderStyle: 'solid',
      // borderColor: theme.colors.border.action.normal,
      backgroundColor: theme.colors.background.surface.default,
      ...shadows().lg,
    },
  });
};
