import React from 'react';
import { Image, ImageProps } from 'react-native';

export const LogoImage: React.FC<Omit<ImageProps, 'source'>> = (props) => {
  return <Image source={require('./logo.image.png')} {...props} />;
};
