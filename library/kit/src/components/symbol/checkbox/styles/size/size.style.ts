import { StyleSheet } from 'react-native';

export const createSizeStyle = (size: 'md' | 'sm') => {
  switch (size) {
    case 'sm':
      return StyleSheet.create({
        element: {},
        content: {
          marginLeft: 8,
        },
      });
    default:
      return StyleSheet.create({
        element: {},
        content: {
          marginLeft: 12,
        },
      });
  }
};
