import { StyleSheet } from 'react-native';

export const createSizeStyle = (size: 'xs' | 'md') => {
  switch (size) {
    case 'xs':
      return StyleSheet.create({
        wrapper: {
          height: 32,
          paddingLeft: 8,
          paddingRight: 8,
        },
        element: {
          height: 32,
        },
        leadIcon: {
          width: 20,
          height: 20,
        },
        tailIcon: {
          width: 20,
          height: 20,
        },
        icon: {
          fontSize: 20,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          height: 40,
          paddingLeft: 12,
          paddingRight: 12,
        },
        element: {
          height: 40,
        },
        leadIcon: {
          width: 20,
          height: 20,
        },
        tailIcon: {
          width: 20,
          height: 20,
        },
        icon: {
          fontSize: 20,
        },
      });
  }
};
