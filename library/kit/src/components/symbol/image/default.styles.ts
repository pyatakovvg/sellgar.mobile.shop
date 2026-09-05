import { StyleSheet } from 'react-native';

export const createStyles = () => {
  return StyleSheet.create({
    wrapper: {},
    process: {
      flex: 1,
    },
    exception: {
      flex: 1,
    },
    image: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    hide: {
      opacity: 0,
    },
  });
};
