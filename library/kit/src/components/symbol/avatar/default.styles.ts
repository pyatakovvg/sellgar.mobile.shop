import { StyleSheet } from 'react-native';

import { radiusMeansurements } from '../../../theme';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {},
    notification: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 10,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radiusMeansurements.full,
      zIndex: 0,
    },
    icon: {},
    status: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      zIndex: 10,
    },
  });
