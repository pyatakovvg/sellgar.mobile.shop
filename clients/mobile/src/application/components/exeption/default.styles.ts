import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      gap: 16,
      justifyContent: 'center',
      padding: 40,
    },
    text: { color: theme.colors.text.base.primary },
  });
};
