import React from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';

import { useTheme } from '../../../theme';

import { createBaseStyles, createFontSize, createWeightFont } from './default.style.ts';

interface IProps {
  style?: StyleProp<TextStyle>;
  size:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-l'
    | 'body-m'
    | 'body-ml'
    | 'body-s'
    | 'caption-l'
    | 'caption-ml'
    | 'caption-m'
    | 'caption-s';
  weight: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black';
}

export const Typography: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const { theme } = useTheme();

  const fontSizeStyle = React.useMemo(() => createFontSize(theme, props.size), [theme, props.size]);
  const fontWeightStyle = React.useMemo(() => createWeightFont(theme, props.weight), [theme, props.weight]);
  const baseStyles = React.useMemo(() => createBaseStyles(theme), [theme]);

  const styles = React.useMemo(
    () => StyleSheet.flatten([fontSizeStyle.text, fontWeightStyle.text]),
    [fontSizeStyle, fontWeightStyle],
  );

  return React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const cloneElement = child as React.ReactElement<any, any>;
      return React.cloneElement(cloneElement, {
        style: [baseStyles.text, styles, props.style, cloneElement.props?.style],
        allowFontScaling: false,
      });
    }
    return child;
  });
};
