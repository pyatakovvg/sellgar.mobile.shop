import { scales } from '../../../../../theme';

import { StyleSheet } from 'react-native';

export const createSizeStyle = (size: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') => {
  switch (size) {
    case '2xl':
      return StyleSheet.create({
        size: {
          width: scales[16],
          height: scales[16],
        },
      });
    case 'xl':
      return StyleSheet.create({
        size: {
          width: scales[14],
          height: scales[14],
        },
      });
    case 'lg':
      return StyleSheet.create({
        size: {
          width: scales[12],
          height: scales[12],
        },
      });
    case 'md':
      return StyleSheet.create({
        size: {
          width: scales[10],
          height: scales[10],
        },
      });
    case 'sm':
      return StyleSheet.create({
        size: {
          width: scales[8],
          height: scales[8],
        },
      });
    case 'xs':
      return StyleSheet.create({
        size: {
          width: scales[6],
          height: scales[6],
          borderWidth: 1.5,
        },
      });
    default:
      return StyleSheet.create({
        size: {
          width: scales[16],
          height: scales[16],
        },
      });
  }
};
