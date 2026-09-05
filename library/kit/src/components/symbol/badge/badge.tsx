import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '../../../theme';

import { createStyle } from './default.styles.ts';
import { createSizeStyle } from './styles/size/size.style.ts';
import { createShapeStyle } from './styles/shape/shape.style.ts';
import { createColorStyle } from './styles/color/color.style.ts';
import { createStrokeStyle } from './styles/stroke/stroke.style.ts';
import { createDisabledStyle } from './styles/disabled/disabled.style.ts';

export interface IProps {
  color?:
    | 'gray'
    | 'blue'
    | 'green'
    | 'red'
    | 'orange'
    | 'purple'
    | 'white'
    | 'surface'
    | 'white-destructive'
    | 'surface-destructive'
    | 'white-info'
    | 'surface-info'
    | 'white-success'
    | 'surface-success';
  state?: 'disabled';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  shape?: 'rounded' | 'pill';
  stroke?: boolean;
  disabled?: boolean;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  label: string | number;
}

export const Badge: React.FC<IProps> = ({
  color = 'gray',
  size = 'md',
  shape = 'rounded',
  stroke,
  disabled,
  label,
  leadIcon,
  tailIcon,
}) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
  const sizeStyles = React.useMemo(() => createSizeStyle(theme, size), [theme, size]);
  const strokeStyles = React.useMemo(() => createStrokeStyle(theme), [theme]);
  const colorStyles = React.useMemo(() => createColorStyle(theme, color), [theme, color]);
  const disabledStyles = React.useMemo(() => createDisabledStyle(theme, color), [theme, color]);
  const shapeStyles = React.useMemo(() => createShapeStyle(theme, shape, size), [theme, shape, size]);

  return (
    <View
      style={[
        baseStyles.wrapper,
        shapeStyles.wrapper,
        colorStyles.wrapper,
        sizeStyles.wrapper,
        stroke && strokeStyles.wrapper,
        disabled && disabledStyles.wrapper,
      ]}
    >
      {leadIcon && (
        <View style={[baseStyles.leadIcon, sizeStyles.leadIcon]}>
          {React.Children.map(leadIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [colorStyles.icon, sizeStyles.icon, disabled && disabledStyles.icon],
              });
            }
            return null;
          })}
        </View>
      )}
      <View>
        <Text style={[baseStyles.text, colorStyles.text, sizeStyles.text, disabled && disabledStyles.text]}>
          {label}
        </Text>
      </View>
      {tailIcon && (
        <View style={[baseStyles.tailIcon, sizeStyles.tailIcon]}>
          {React.Children.map(tailIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [colorStyles.icon, sizeStyles.icon, disabled && disabledStyles.icon],
              });
            }
            return null;
          })}
        </View>
      )}
    </View>
  );
};
