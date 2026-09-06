import React from 'react';
import { Image, ImageProps } from 'react-native';

export const CardImage: React.FC<Omit<ImageProps, 'source'>> = (props) => {
  return <Image source={require('./card.image.png')} {...props} />;
};
