import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createTargetStyle = (theme: TTheme, target?: 'destructive', type?: 'default' | 'borderless') => {
  switch (target) {
    case 'destructive':
      if (type === 'borderless') {
        return StyleSheet.create({
          wrapper: {},
          element: {
            color: theme.colors.text.status.destructive,
          },
        });
      }
      return StyleSheet.create({
        wrapper: {
          borderColor: theme.colors.border.action.destructive,
          backgroundColor: theme.colors.background.input.normal,
        },
        element: {},
      });

    default:
      return StyleSheet.create({
        wrapper: {},
        element: {},
        wrapper_focus: {},
        text: {},
        leadIcon: {},
        tailIcon: {},
      });
  }
};
