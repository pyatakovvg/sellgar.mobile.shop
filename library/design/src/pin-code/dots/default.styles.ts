import { TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    content: {
      flexDirection: 'row',
    },
    item: {
      paddingHorizontal: 10,
    },
    spinner_icon: {
      fontSize: 16,
      color: theme.colors.icon.status.info,
    },
  });
};
