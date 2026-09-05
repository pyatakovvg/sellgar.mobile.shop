import { useTheme } from '@library/kit';

import React from 'react';
import { View } from 'react-native';

import { createSizeStyle } from './styles/size/size.style.ts';
import { createColorStyle } from './styles/color/color.style.ts';
import { createStyles } from './default.styles.ts';

interface IProps {
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  color?: 'gray' | 'green' | 'blue' | 'orange' | 'red' | 'purple';
}

export const NotificationDot: React.FC<IProps> = ({ size = '2xl', color = 'gray' }) => {
  const { theme } = useTheme();
  const baseStyles = createStyles();
  const sizeStyles = createSizeStyle(size);
  const colorStyle = createColorStyle(theme, color);

  return <View style={[baseStyles.wrapper, sizeStyles.size, colorStyle.color]} />;
};
