import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    label_text: {
      color: theme.colors.text.base.primary,
    },
    caption: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      marginLeft: 4,
    },
    caption_text: {
      color: theme.colors.text.base.tertiary,
    },
    required: {
      marginLeft: 4,
    },
    required_text: {
      color: theme.colors.text.status.destructive,
    },
  });
};
