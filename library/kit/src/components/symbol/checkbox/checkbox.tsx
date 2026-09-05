import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { useTheme } from '../../../theme';

import { Element } from './element';
import { Typography } from '../typography';

import { createStyle } from './default.styles.ts';
import { createSizeStyle } from './styles/size/size.style.ts';

export interface IProps {
  size?: 'sm' | 'md';
  label?: string;
  caption?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?(checked: boolean): void;
  onPress?(): void;
}

export const Checkbox: React.FC<IProps> = ({ size = 'md', label, caption, ...props }) => {
  const { theme } = useTheme();

  const [isChecked, setChecked] = React.useState((props.defaultChecked || props.checked) ?? false);

  const baseStyle = React.useMemo(() => createStyle(theme), [theme]);
  const sizeStyle = React.useMemo(() => createSizeStyle(size), [size]);

  React.useEffect(() => {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  const handlePress = () => {
    props.onPress?.();

    if (props.disabled) {
      return;
    }
    const state = !isChecked;

    setChecked(state);
    props.onChange && props.onChange(state);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[baseStyle.wrapper]}>
        <View style={[baseStyle.element, label && sizeStyle.element]}>
          <Element size={size} {...props} checked={isChecked} />
        </View>
        {label && (
          <View style={[baseStyle.content, sizeStyle.content]}>
            <View>
              <Typography size={size === 'md' ? 'body-s' : 'caption-l'} weight={'medium'}>
                <Text style={[baseStyle.label]}>{label}</Text>
              </Typography>
            </View>
            {caption && (
              <View style={[baseStyle.caption]}>
                <Typography size={size === 'md' ? 'caption-l' : 'caption-m'} weight={'regular'}>
                  <Text style={[baseStyle.description]}>{caption}</Text>
                </Typography>
              </View>
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
};
