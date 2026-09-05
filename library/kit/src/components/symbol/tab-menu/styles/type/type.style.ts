import { StyleSheet } from 'react-native';

import { radiusMeansurements, scales, TTheme } from '../../../../../theme';

export const createTypeStyle = (theme: TTheme, type?: 'fill' | 'line' | 'segmented') => {
  switch (type) {
    case 'fill':
      return StyleSheet.create({
        menu: {},
        tab: {
          marginLeft: scales[8],
        },
      });
    case 'line':
      return StyleSheet.create({
        menu: {},
        tab: {
          marginLeft: scales[24],
        },
      });
    case 'segmented':
      return StyleSheet.create({
        menu: {
          padding: scales[2],
          borderRadius: radiusMeansurements.xl,
          backgroundColor: theme.colors.background.overlay.custom,
        },
        tab: {
          marginLeft: scales[2],
        },
      });
    default:
      return StyleSheet.create({
        menu: {},
        tab: {},
      });
  }
};
