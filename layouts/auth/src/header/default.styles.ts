import { scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: scales[40],
    },
    icon: {
      fontSize: 24,
      color: theme.colors.icon.base.primary,
    },
  });
};
