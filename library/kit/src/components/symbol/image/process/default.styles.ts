import { TTheme } from '../../../../theme';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: theme.colors.icon.status.info,
    },
  });
};
