import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: theme.numbers.radius.xs,
    },
    icon: {
      color: theme.colors.icon.base.primary,
    },
  });
};
