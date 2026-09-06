import React from 'react';
import { Image, ImageProps } from 'react-native';

export const MoneyImage: React.FC<Omit<ImageProps, 'source'>> = (props) => {
  return <Image source={require('./money.image.png')} {...props} />;
};
