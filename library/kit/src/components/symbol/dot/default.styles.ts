import { StyleSheet } from 'react-native';

import { scales, TTheme } from '../../../theme';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    content: {
      width: scales[14],
      height: scales[14],
      backgroundColor: theme.colors.background.accent.gray_subtle,
      borderRadius: '50%',
    },
    activeBg: {
      backgroundColor: theme.colors.background.accent.blue_accent,
    },
    errorBg: {
      backgroundColor: theme.colors.background.accent.accent_red_accent,
    },
  });
};
