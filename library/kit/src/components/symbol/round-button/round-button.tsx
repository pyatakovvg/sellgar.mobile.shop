import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { Animate, type TAnimationScaleRef } from '../../utils';
import { useTheme } from '../../../theme';

import { Typography } from '../typography';

import { createStyles } from './default.styles.ts';

interface IProps {
  caption: string;
  onPress: () => void;
  disabled?: boolean;
}

export const RoundButton: React.FC<IProps> = (props) => {
  const { theme } = useTheme();
  const baseStyles = createStyles(theme);
  const scaleRef = React.useRef<TAnimationScaleRef>(null);
  const handlePressIn = () => {
    scaleRef?.current?.handlerScaleIn();
  };
  const handlePressOut = () => {
    scaleRef?.current?.handlerScaleOut();
  };
  const handlePress = () => {
    props.onPress();
  };
  return (
    <Animate.Scale ref={scaleRef}>
      <TouchableOpacity
        disabled={props.disabled}
        activeOpacity={0.7}
        style={baseStyles.content}
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
        onPress={() => handlePress()}
      >
        <Typography size={'h4'} weight={'medium'}>
          <Text style={baseStyles.text}>{props.caption}</Text>
        </Typography>
      </TouchableOpacity>
    </Animate.Scale>
  );
};
