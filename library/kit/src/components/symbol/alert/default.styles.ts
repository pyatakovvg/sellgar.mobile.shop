import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background.surface.warning_subtle,
      borderRadius: 8,
      padding: 24,
    },
    header: {
      color: theme.colors.text.status.warning,
      marginBottom: 16,
    },
    content: {
      color: theme.colors.text.status.warning,
    },
  });
};
