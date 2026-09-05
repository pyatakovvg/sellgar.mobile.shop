import { Platform, StyleSheet } from 'react-native';

import { shadows, TTheme } from '../../../../../theme';

export const createTypeStyle = (theme: TTheme, type?: 'default' | 'borderless') => {
  switch (type) {
    case 'borderless':
      return StyleSheet.create({
        wrapper: {},
        element: {
          fontFamily: Platform.OS === 'android' ? 'Geologica Roman Medium' : 'Geologica Roman',
          fontWeight: theme.typography.weight.medium,
          fontSize: theme.typography.fontSize.h6,
          letterSpacing: theme.typography.letterSpacing.h6,
        },
      });

    default:
      return StyleSheet.create({
        wrapper: {
          borderRadius: theme.numbers.radius.xl,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: theme.colors.border.action.normal,
          backgroundColor: theme.colors.background.input.normal,
          ...shadows().lg,
        },
        element: {
          fontFamily: Platform.OS === 'android' ? 'Geologica Roman Regular' : 'Geologica Roman',
          fontWeight: theme.typography.weight.regular,
          fontSize: theme.typography.fontSize.caption_l,
          letterSpacing: theme.typography.letterSpacing.caption_l,
        },
      });
  }
};
