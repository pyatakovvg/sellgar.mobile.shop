import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../../theme';

export const createDisabledStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      borderColor: theme.colors.background.checkbox.disabled,
      backgroundColor: theme.colors.background.checkbox.disabled,
    },
    icon: {},
  });
};
