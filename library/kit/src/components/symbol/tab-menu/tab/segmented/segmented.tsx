import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../../../../theme';

import { Typography } from '../../../typography';

import { createStyles } from './default.styles.ts';
import { createShapeStyle } from './styles/shape/shape.style.ts';
import { createSizeStyle } from './styles/size/size.style.ts';

interface IProps {
  size?: 'lg' | 'md' | 'sm';
  style?: 'primary';
  shape?: 'rounded' | 'pill';
  isActive?: boolean;
  title: string;
  name: string;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  badge?: React.ReactNode;
  onPress?(tabName: string): void;
  disabled?: boolean;
}

export const Segmented: React.FC<React.PropsWithChildren<IProps>> = ({
  size = 'lg',
  style = 'primary',
  shape = 'rounded',
  ...props
}) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  const shapeStyles = React.useMemo(() => createShapeStyle(shape), [shape]);
  const sizeStyles = React.useMemo(() => createSizeStyle(size), [size]);

  const wrapperStyles = React.useMemo(
    () => StyleSheet.flatten([baseStyles.wrapper, shapeStyles.wrapper, sizeStyles.wrapper]),
    [baseStyles, shapeStyles, sizeStyles],
  );
  const titleStyles = React.useMemo(() => StyleSheet.flatten(baseStyles.title), [baseStyles]);

  return (
    <View style={[wrapperStyles, props.isActive ? baseStyles.wrapper_active : {}]} role={'tab'}>
      {props.leadIcon && <View style={baseStyles.icon}>{props.leadIcon}</View>}
      <Typography size={size === 'sm' ? 'caption-l' : 'body-s'} weight={'semi-bold'}>
        <Text style={[titleStyles, props.isActive ? baseStyles.title_active : {}]}>{props.title}</Text>
      </Typography>
      {props.badge && <View style={baseStyles.badge}>{props.badge}</View>}
      {props.tailIcon && <View style={baseStyles.icon}>{props.tailIcon}</View>}
    </View>
  );
};
