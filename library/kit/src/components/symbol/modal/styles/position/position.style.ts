import { StyleSheet } from 'react-native';

import { shadows, TTheme } from '../../../../../theme';

export const createPositionStyle = (theme: TTheme, position: 'center' | 'bottom') => {
  switch (position) {
    case 'bottom':
      return StyleSheet.create({
        wrapper: {
          flexGrow: 1,
          justifyContent: 'flex-end',
        },
        container: {
          overflow: 'hidden',
          borderRadius: theme.numbers.radius.xxl,
          backgroundColor: theme.colors.background.surface.default,
        },
      });
    case 'center': {
      return StyleSheet.create({
        wrapper: {},
        container: {
          borderRadius: theme.numbers.radius.xxl,
          backgroundColor: theme.colors.background.surface.default,
          ...shadows().lg,
        },
      });
    }
  }
};
