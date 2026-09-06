import React from 'react';
import { Image, ImageProps } from 'react-native';

export const CoinsImage: React.FC<Omit<ImageProps, 'source'>> = (props) => {
  return <Image source={require('./coins.image.png')} {...props} />;
};
