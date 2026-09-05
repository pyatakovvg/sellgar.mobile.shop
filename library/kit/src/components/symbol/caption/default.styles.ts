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
    leadIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    icon: {
      width: 18,
      height: 18,
      fontSize: 18,
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
  });
};
