import { Typography, useTheme } from '@library/kit';
import { amountFormat } from '@utils/format';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';
import { Dots } from '../pin-code/dots';
interface IProps {
  className?: string;
  value: number;
  currency: string;
  visible: boolean;
}

export const Balance: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);

  if (!props.visible) {
    return (
      <View style={baseStyles.dots}>
        <Dots itemContainerStyle={baseStyles.dot} dots={new Array(6).fill(false)} />
      </View>
    );
  }

  return (
    <View style={baseStyles.wrapper}>
      <Typography size={'h4'} weight={'semi-bold'}>
        <Text style={baseStyles.amount_text}>{amountFormat(props.value)}</Text>
      </Typography>
      <View style={baseStyles.currency}>
        <Typography size={'h4'} weight={'semi-bold'}>
          <Text style={baseStyles.currency_text}>{props.currency}</Text>
        </Typography>
      </View>
    </View>
  );
};
