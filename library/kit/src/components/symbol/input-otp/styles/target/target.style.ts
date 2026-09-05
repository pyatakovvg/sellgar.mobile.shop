import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createTargetStyle = (theme: TTheme, target?: 'destructive') => {
  switch (target) {
    case 'destructive':
      return StyleSheet.create({
        wrapper: {
          borderColor: theme.colors.border.action.destructive,
          backgroundColor: theme.colors.background.input.normal,
        },
      });

    default:
      return StyleSheet.create({
        wrapper: {},
        text: {},
        leadIcon: {},
        tailIcon: {},
      });
  }
};
