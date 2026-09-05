import { StyleSheet } from 'react-native';

import { radiusMeansurements } from '../../../theme';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      borderRadius: radiusMeansurements.full,
      borderWidth: 2,
    },
  });
