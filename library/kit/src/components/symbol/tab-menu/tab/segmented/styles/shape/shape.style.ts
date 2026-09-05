import { StyleSheet } from 'react-native';

import { radiusMeansurements } from '../../../../../../../theme';

export const createShapeStyle = (shape: 'rounded' | 'pill') => {
  switch (shape) {
    case 'pill':
      return StyleSheet.create({
        wrapper: {
          borderRadius: radiusMeansurements.full,
        },
      });
    case 'rounded':
      return StyleSheet.create({
        wrapper: {
          borderRadius: radiusMeansurements.lg,
        },
      });
    default: {
      return StyleSheet.create({
        wrapper: {},
      });
    }
  }
};
