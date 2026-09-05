import { StyleSheet } from 'react-native';
import { radiusMeansurements } from '../../../../../theme';

export const createShapeStyle = (shape: 'rounded' | 'pill', type?: 'fill' | 'line' | 'segmented') => {
  switch (shape) {
    case 'pill':
      switch (type) {
        case 'segmented':
          return StyleSheet.create({
            menu: {
              borderRadius: radiusMeansurements.full,
            },
          });
        default:
          return StyleSheet.create({
            menu: {},
          });
      }
    default: {
      return StyleSheet.create({
        menu: {},
      });
    }
  }
};
