import { StyleSheet } from 'react-native';

import { scales } from '../../../../../../../theme';

export const createSizeStyle = (size?: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'lg':
      return StyleSheet.create({
        wrapper: {
          paddingVertical: scales[12],
          paddingHorizontal: scales[16],
        },
      });
    case 'md':
      return StyleSheet.create({
        wrapper: {
          paddingVertical: scales[8],
          paddingHorizontal: scales[12],
        },
      });
    case 'sm':
      return StyleSheet.create({
        wrapper: {
          paddingVertical: scales[6],
          paddingHorizontal: scales[12],
        },
      });
    default: {
      return StyleSheet.create({
        wrapper: {},
      });
    }
  }
};
