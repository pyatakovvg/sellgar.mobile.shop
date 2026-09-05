import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createShapeStyle = (theme: TTheme, shape: 'rounded' | 'pill', size: 'lg' | 'md' | 'sm' | 'xs') => {
  switch (shape) {
    case 'rounded':
      switch (size) {
        case 'lg':
          return StyleSheet.create({
            wrapper: {
              borderRadius: theme.numbers.radius.xl,
            },
          });
        case 'sm':
          return StyleSheet.create({
            wrapper: {
              borderRadius: theme.numbers.radius.lg,
            },
          });
        case 'xs':
          return StyleSheet.create({
            wrapper: {
              borderRadius: theme.numbers.radius.md,
            },
          });
        default:
          return StyleSheet.create({
            wrapper: {
              borderRadius: theme.numbers.radius.xl,
            },
          });
      }
    default: {
      return StyleSheet.create({
        wrapper: {
          borderRadius: theme.numbers.radius.full,
        },
      });
    }
  }
};
