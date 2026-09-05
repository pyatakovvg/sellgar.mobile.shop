import { StyleSheet } from 'react-native';

export const createStyle = () => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    label: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      marginBottom: 8,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    caption: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      marginTop: 8,
    },
  });
};
