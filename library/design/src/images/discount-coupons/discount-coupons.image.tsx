import React from 'react';
import { Image, ImageProps } from 'react-native';

export const DiscountCouponsImage: React.FC<Omit<ImageProps, 'source'>> = (props) => {
  return <Image source={require('./discount-coupons.image.png')} {...props} />;
};
