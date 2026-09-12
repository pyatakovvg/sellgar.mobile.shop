import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'column',
      gap: 16,
      padding: 40,
      justifyContent: 'center',
      backgroundColor: theme.colors.background.surface.destructive,
    },
    title: { color: theme.colors.text.base.primary },
    description: { color: theme.colors.text.base.secondary },
    debug: { color: theme.colors.text.base.tertiary },
  });
};
