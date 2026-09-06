import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import ServiceImage from './service-image.svg';

import { createStyles } from './default.styles.ts';

interface IProps {
  onPress?: () => void;
}

export const WalletPayBanner: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity disabled={!props.onPress} onPress={props.onPress} activeOpacity={0.8}>
      <View style={baseStyles.wrapper}>
        <Typography size={'body-ml'} weight={'semi-bold'}>
          <Text style={baseStyles.title}>{'Оплата\nсервисов'}</Text>
        </Typography>
        <Typography size={'caption-s'} weight={'regular'}>
          <Text style={baseStyles.subtitle}>{'Оплата сервисов в Казахстане\nс низкой комиссией'}</Text>
        </Typography>
        <ServiceImage style={baseStyles.image} />
      </View>
    </TouchableOpacity>
  );
};
