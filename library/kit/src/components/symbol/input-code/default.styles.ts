import { Platform, StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      borderCurve: 'circular',
      borderRadius: theme.numbers.radius.xl,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border.action.normal,
      backgroundColor: theme.colors.background.input.normal,
      overflow: 'hidden',
      // для ios
      shadowColor: 'rgba(20, 21, 26, 0.2)',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      // для android
      elevation: 2,
    },
    wrapper_focus: {
      borderColor: theme.colors.border.action.focus,
    },
    wrapper_disabled: {
      borderColor: theme.colors.border.action.disabled,
    },
    element: {
      display: 'flex',
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 12,
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: theme.colors.text.base.primary,
      fontFamily: Platform.OS === 'android' ? 'Geologica Roman Regular' : 'Geologica Roman',
      fontWeight: theme.typography.weight.regular,
      fontSize: theme.typography.fontSize.h6,
      letterSpacing: theme.typography.letterSpacing.h6,
    },
  });
};
