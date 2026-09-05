import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../../../../theme';
import { Animate } from '../../../utils';
import { Icon } from '../../icon';

import { createStyle, createSizeStyle } from './default.styles.ts';

export interface IProps {
  size?: 'md' | 'xs';
  tailIcon?: React.ReactNode;
  inProcess?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<React.PropsWithChildren<IProps>> = ({
  size = 'md',
  tailIcon,
  inProcess,
  disabled,
  children,
  onPress,
}) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
  const sizeStyles = React.useMemo(() => createSizeStyle(size), [size]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || inProcess}
      onPress={onPress}
      style={[baseStyles.wrapper, sizeStyles.wrapper, disabled && baseStyles.disabled]}
    >
      {children && (
        <Text style={[baseStyles.text, inProcess && baseStyles.hidden, disabled && baseStyles.disabledText]}>
          {children}
        </Text>
      )}
      {tailIcon && (
        <View style={inProcess && baseStyles.hidden}>
          {React.Children.map(tailIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [
                  baseStyles.tailIcon,
                  sizeStyles.tailIcon,
                  cloneElement.props.style,
                  disabled && baseStyles.disabledIcon,
                ],
              });
            }
            return null;
          })}
        </View>
      )}
      {inProcess && (
        <View style={baseStyles.spinner}>
          <Animate.Spin>
            <Icon icon={'loader-4-line'} style={[sizeStyles.tailIcon, baseStyles.spinnerIcon]} />
          </Animate.Spin>
        </View>
      )}
    </TouchableOpacity>
  );
};
