import { scales } from '../../../../../theme';

import { StyleSheet } from 'react-native';

export const createSizeStyle = (size: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') => {
  switch (size) {
    case '2xl':
      return StyleSheet.create({
        wrapper: {
          width: scales[64],
          height: scales[64],
        },
        icon: {
          fontSize: scales[30],
        },
      });
    case 'xl':
      return StyleSheet.create({
        wrapper: {
          width: scales[56],
          height: scales[56],
        },
        icon: {
          fontSize: scales[24],
        },
      });
    case 'lg':
      return StyleSheet.create({
        wrapper: {
          width: scales[48],
          height: scales[48],
        },
        icon: {
          fontSize: scales[20],
        },
      });
    case 'md':
      return StyleSheet.create({
        wrapper: {
          width: scales[36],
          height: scales[36],
        },
        icon: {
          fontSize: scales[20],
        },
      });
    case 'sm':
      return StyleSheet.create({
        wrapper: {
          width: scales[32],
          height: scales[32],
        },
        icon: {
          fontSize: scales[14],
        },
      });
    case 'xs':
      return StyleSheet.create({
        wrapper: {
          width: scales[20],
          height: scales[20],
        },
        icon: {
          fontSize: scales[12],
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          width: scales[20],
          height: scales[20],
        },
        icon: {
          fontSize: scales[12],
        },
      });
  }
};
