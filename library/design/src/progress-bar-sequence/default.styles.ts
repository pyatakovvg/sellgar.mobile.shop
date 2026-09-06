import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: 6,
    },
    item: {
      flex: 1,
      height: 4,
    },
  });
