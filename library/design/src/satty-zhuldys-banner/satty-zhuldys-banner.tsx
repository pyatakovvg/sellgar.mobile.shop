import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { SattyZhuldysImage } from './satty-zhuldys-image';

import { createStyles } from './default.styles.ts';

interface IProps {
  onPress?: () => void;
}

export const SattyZhuldysBanner: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity disabled={!props.onPress} onPress={props.onPress} activeOpacity={0.8}>
      <View style={baseStyles.wrapper}>
        <View style={baseStyles.content}>
          <Typography size={'body-ml'} weight={'semi-bold'}>
            <Text style={baseStyles.title}>{'Пополнить\nСәтті Жұлдыз'}</Text>
          </Typography>
          <Typography size={'caption-s'} weight={'regular'}>
            <Text style={baseStyles.subtitle}>{'Пополняйте счет Сәтті Жұлдыз\nбез комиссии'}</Text>
          </Typography>
        </View>
        <SattyZhuldysImage />
      </View>
    </TouchableOpacity>
  );
};
