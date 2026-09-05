import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
    },
    line: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: 0,
      borderTopWidth: 1,
      borderStyle: 'solid',
      borderTopColor: theme.colors.border.base.divider,
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      paddingRight: 8,
    },
    center: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      paddingLeft: 8,
      paddingRight: 8,
    },
    text: {
      color: theme.colors.text.base.secondary,
    },
  });
