import { scales, type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: scales[24],
    },
    logotype: {},
    iconView: {
      position: 'absolute',
      bottom: scales[40],
      left: scales[16],
    },
    icon: {
      fontSize: scales[24],
      color: theme.colors.icon.base.static_white,
    },
  });
};
