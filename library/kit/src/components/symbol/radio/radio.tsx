import React from 'react';

import { Typography } from '../typography';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../../../theme';

import { createStyles } from './default.styles.ts';

export interface IProps {
  active: boolean;
  onPress: (value: boolean) => void;
  size?: 'sm' | 'md';
  label?: string;
  caption?: string;
  disabled?: boolean;
}

export const Radio: React.FC<IProps> = ({ size = 'sm', label, caption, active = false, onPress, disabled }) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  const sizeStyles = React.useMemo(() => {
    let element = baseStyles.elementMd;
    let content = baseStyles.contentMd;
    let dot = baseStyles.dotMd;
    switch (size) {
      case 'sm':
        content = baseStyles.contentSm;
        element = baseStyles.elementSm;
        dot = baseStyles.dotSm;
    }
    return {
      element,
      content,
      dot,
    };
  }, [baseStyles, size, label]);

  const disabledStyles = React.useMemo(() => {
    let element = {};
    let dot = {};
    switch (disabled) {
      case true:
        element = active ? baseStyles.elementActiveDisabled : baseStyles.elementInactiveDisabled;
        dot = baseStyles.dotDisabled;
    }
    return {
      element,
      dot,
    };
  }, [baseStyles, disabled, active]);

  return (
    <TouchableOpacity disabled={disabled} onPress={() => onPress(!active)} style={baseStyles.wrapper}>
      <View
        style={[
          baseStyles.element,
          sizeStyles.element,
          active ? baseStyles.elementActive : baseStyles.elementInactive,
          disabledStyles.element,
        ]}
      >
        {active && <View style={[baseStyles.dot, sizeStyles.dot, disabledStyles.dot]} />}
      </View>
      {label && (
        <View style={sizeStyles.content}>
          <Typography size={size === 'md' ? 'body-s' : 'caption-l'} weight={'medium'}>
            <Text style={baseStyles.label}>{label}</Text>
          </Typography>
          {caption && (
            <Typography size={'caption-l'} weight={'regular'}>
              <Text style={baseStyles.caption}>{caption}</Text>
            </Typography>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
