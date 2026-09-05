import React from 'react';
import { Text, View, ButtonProps, TouchableOpacity } from 'react-native';

import { useTheme } from '../../../theme';

import { createStyle } from './default.styles.ts';
import { createSizeStyle } from './styles/size/size.style.ts';
import { createStyleStyle } from './styles/style/style.style.ts';
import { createShapeStyle } from './styles/shape/shape.style.ts';
import { createTargetStyle } from './styles/target/target.style.ts';
import { createDisabledStyle } from './styles/disabled/disabled.style.ts';
import { Animate } from '../../utils';
import { Icon } from '../icon';

interface IProps extends Omit<ButtonProps, 'title' | 'style'> {
  style?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  target?: 'destructive' | 'success' | 'info';
  shape?: 'rounded' | 'pill';
  badge?: React.ReactNode;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  size = 'md',
  style = 'primary',
  shape = 'rounded',
  target,
  badge,
  leadIcon,
  tailIcon,
  disabled,
  loading,
  ...props
}) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(), []);
  const sizeStyles = React.useMemo(() => createSizeStyle(theme, size), [theme, size]);
  const styleStyles = createStyleStyle(theme, style);
  const shapeStyles = React.useMemo(() => createShapeStyle(theme, shape, size), [theme, shape, size]);
  const targetStyles = React.useMemo(() => createTargetStyle(theme, style, target), [theme, target, style]);
  const disabledStyles = React.useMemo(() => createDisabledStyle(theme, style, target), [theme, target, style]);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        baseStyles.wrapper,
        sizeStyles.wrapper,
        shapeStyles.wrapper,
        styleStyles.wrapper,
        targetStyles.wrapper,
        disabled && disabledStyles.wrapper,
      ]}
    >
      {leadIcon && (
        <View style={[baseStyles.leadIcon, sizeStyles.leadIcon]}>
          {React.Children.map(leadIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [
                  styleStyles.icon,
                  sizeStyles.icon,
                  sizeStyles.icon,
                  targetStyles.icon,
                  cloneElement?.props?.style,
                  disabled && disabledStyles.icon,
                ],
              });
            }
            return null;
          })}
        </View>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {loading && (
          <View style={baseStyles.loader}>
            <Animate.Spin>
              <Icon
                icon={'loader-4-fill'}
                style={[styleStyles.icon, sizeStyles.icon, sizeStyles.icon, targetStyles.icon]}
              />
            </Animate.Spin>
          </View>
        )}
        <Text
          allowFontScaling={false}
          style={[
            baseStyles.text,
            sizeStyles.text,
            styleStyles.text,
            targetStyles.text,
            disabled && disabledStyles.text,
          ]}
        >
          {children}
        </Text>
      </View>
      {badge && (
        <View style={[baseStyles.badge, sizeStyles.badge]}>
          {React.Children.map(badge, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                disabled,
                stroke: style !== 'primary',
                color: target === 'destructive' ? 'surface-destructive' : 'surface',
                size: size === 'lg' ? 'md' : size === 'xs' ? 'xs' : 'sm',
              });
            }
            return null;
          })}
        </View>
      )}
      {tailIcon && (
        <View style={[baseStyles.tailIcon, sizeStyles.tailIcon]}>
          {React.Children.map(tailIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [
                  styleStyles.icon,
                  sizeStyles.icon,
                  sizeStyles.icon,
                  targetStyles.icon,
                  disabled && disabledStyles.icon,
                ],
              });
            }
            return null;
          })}
        </View>
      )}
    </TouchableOpacity>
  );
};
