import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: theme.numbers.radius.xl,
      borderBottomRightRadius: theme.numbers.radius.xl,
      borderWidth: 1,
      borderColor: theme.colors.border.action.normal,
      borderLeftColor: 'transparent',
      backgroundColor: theme.colors.background.button.ghost,
    },
    text: {
      flex: 0,
      color: theme.colors.text.base.primary,
    },
    tailIcon: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.text.base.secondary,
    },
    spinner: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    spinnerIcon: {
      color: theme.colors.icon.accent.blue_accent,
    },
    hidden: {
      opacity: 0,
    },
    disabled: {
      backgroundColor: theme.colors.background.button.ghost,
      borderColor: theme.colors.border.action.disabled,
      borderLeftColor: 'transparent',
    },
    disabledText: {
      color: theme.colors.text.base.quaternary,
    },
    disabledIcon: {
      color: theme.colors.icon.base.quaternary,
    },
  });
};

export const createSizeStyle = (size: 'xs' | 'md') => {
  switch (size) {
    case 'xs':
      return StyleSheet.create({
        wrapper: {
          height: 32,
          paddingTop: 6,
          paddingRight: 10,
          paddingBottom: 6,
          paddingLeft: 9,
          gap: 2,
        },
        tailIcon: {
          fontSize: 13,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          height: 40,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 9,
          gap: 2,
        },
        tailIcon: {
          fontSize: 16,
        },
      });
  }
};
