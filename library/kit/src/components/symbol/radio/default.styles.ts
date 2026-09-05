import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    element: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      borderWidth: 2,
    },
    elementActive: {
      borderColor: theme.colors.border.accent.blue_accent,
    },
    elementInactive: {
      borderColor: theme.colors.border.action.normal,
    },
    elementActiveDisabled: {
      borderColor: theme.colors.border.action.disabled,
    },
    elementInactiveDisabled: {
      backgroundColor: theme.colors.background.checkbox.disabled,
    },
    elementMd: {
      width: 20,
      height: 20,
      marginTop: 2,
    },
    elementSm: {
      width: 16,
      height: 16,
      marginTop: 1,
    },
    dot: {
      borderRadius: '50%',
      backgroundColor: theme.colors.icon.status.info,
    },
    dotDisabled: {
      backgroundColor: theme.colors.background.checkbox.disabled,
    },
    dotMd: {
      width: 10,
      height: 10,
    },
    dotSm: {
      width: 8,
      height: 8,
    },
    contentMd: {
      marginLeft: 12,
    },
    contentSm: {
      marginLeft: 8,
    },
    label: {
      color: theme.colors.text.base.primary,
    },
    caption: {
      color: theme.colors.text.base.secondary,
      marginTop: 4,
    },
  });
};
