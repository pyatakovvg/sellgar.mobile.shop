import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0,
    },
    element: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    label: {
      color: theme.colors.text.base.primary,
    },
    caption: {
      marginTop: 4,
    },
    description: {
      color: theme.colors.text.base.secondary,
    },
  });
};
