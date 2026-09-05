import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    content: {
      width: 89,
      height: 89,
      borderRadius: '50%',
      backgroundColor: theme.colors.background.surface.neutral_subtle,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.text.base.primary,
    },
  });
};
