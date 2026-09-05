import React from 'react';
import ReactNative from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { createStyle } from './default.styles.ts';

interface IProps extends ReactNative.ViewProps {
  colors: (string | number)[];
}

export const LinearGradientWrapper: React.FC<React.PropsWithChildren<IProps>> = ({ colors, ...props }) => {
  const baseStyle = React.useMemo(() => createStyle(), []);

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[baseStyle.wrapper, props.style]}
      {...props}
    >
      {props.children}
    </LinearGradient>
  );
};
