import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import { iconMap } from './icon.types.ts';

interface IProps {
  icon: keyof typeof iconMap;
  style?: StyleProp<TextStyle>;
}

export const Icon: React.FC<IProps> = (props) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        props.style,
        {
          fontFamily: 'icomoon',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textTransform: 'none',
        },
      ]}
    >
      {iconMap[props.icon]}
    </Text>
  );
};
