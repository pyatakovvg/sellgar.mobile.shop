import React from 'react';
import { View } from 'react-native';

import { RoundButton } from '../round-button';
import { createStyles } from './default.styles.ts';

interface IProps {
  onChange: (value: string) => void;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}
const renderCol = (caption: string, onPress: (caption: string) => void) => {
  const baseStyles = createStyles();

  return (
    <View key={caption} style={baseStyles.col}>
      <RoundButton caption={caption} onPress={() => onPress(caption)} />
    </View>
  );
};
const renderRow = (values: string[], onPress: (caption: string) => void) => {
  const baseStyles = createStyles();

  return (
    <View key={values.toString()} style={baseStyles.row}>
      {values.map((value) => renderCol(value, onPress))}
    </View>
  );
};

export const Numpad: React.FC<IProps> = (props) => {
  const baseStyles = createStyles();
  const numMatrix = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  return (
    <View style={baseStyles.wrapper}>
      {numMatrix.map((matrix) => renderRow(matrix, props.onChange))}
      <View style={[baseStyles.row, { justifyContent: 'center' }]}>
        <View style={[baseStyles.col, baseStyles.bottomCol]}>{props?.leftSlot ?? null}</View>
        <View style={[baseStyles.col, baseStyles.bottomCol]}>
          <RoundButton caption={'0'} onPress={() => props.onChange('0')} />
        </View>
        <View style={[baseStyles.col, baseStyles.bottomCol]}>{props?.rightSlot ?? null}</View>
      </View>
    </View>
  );
};
