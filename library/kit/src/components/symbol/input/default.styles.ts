import { StyleSheet } from 'react-native';

import { scales, TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
    wrapper_with_button: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    wrapper_focus: {
      borderColor: theme.colors.border.action.focus,
      shadowColor: theme.colors.border.action.focus_light,
    },
    wrapper_disabled: {
      shadowColor: theme.colors.border.action.disabled,
      borderColor: theme.colors.border.action.disabled,
    },
    leadIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: scales[4],
      color: theme.colors.icon.base.primary,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scales[4],
    },
    element: {
      display: 'flex',
      flex: 1,
      padding: 0,
      backgroundColor: 'transparent',
      color: theme.colors.text.base.primary,
    },
    badge: {
      paddingHorizontal: scales[4],
    },
    tailIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: scales[4],
    },
    icon: {
      color: theme.colors.icon.base.tertiary,
    },
  });
};
