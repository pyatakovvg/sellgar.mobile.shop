import { Dimensions } from 'react-native';

export const scalePx = (value: number) => {
  const designWidth = 428;
  return Math.round((Dimensions.get('window').width * value) / designWidth);
};
