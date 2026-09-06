import { Animate, Numpad, Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { Dots } from './dots';

import { createStyles } from './default.styles.ts';

interface IProps {
  label: string;
  dots: boolean[];
  bottomSlot?: React.ReactNode;
  numPadRightSlot?: React.ReactNode;
  numPadLeftSlot?: React.ReactNode;
  loading?: boolean;
  onChange: (value: string) => void;
  ref: React.RefObject<{
    shakeDots: () => void;
  }>;
  errorMessage?: string;
}

export const PinCode: React.FC<IProps> = (props) => {
  const { theme } = useTheme();
  const shakeRef = React.useRef({
    handleShake: () => null,
  });

  const baseStyles = createStyles(theme);

  React.useImperativeHandle(props.ref, () => ({
    shakeDots: shakeRef.current.handleShake,
  }));

  return (
    <View>
      <View style={baseStyles.header}>
        <Typography size={'body-l'} weight={'semi-bold'}>
          <Text style={[baseStyles.headerText, props.errorMessage ? baseStyles.errorHeaderText : {}]}>
            {props.errorMessage || props.label}
          </Text>
        </Typography>
      </View>
      <View style={baseStyles.dots}>
        <Animate.Shake ref={shakeRef}>
          <Dots error={!!props.errorMessage} dots={props.dots} loading={props.loading} />
        </Animate.Shake>
      </View>
      <View style={baseStyles.content}>
        <Numpad
          onChange={(value) => props.onChange(value)}
          rightSlot={props.numPadRightSlot}
          leftSlot={props.numPadLeftSlot}
        />
      </View>
      <View style={baseStyles.bottomSlot}>{props.bottomSlot ?? null}</View>
    </View>
  );
};
