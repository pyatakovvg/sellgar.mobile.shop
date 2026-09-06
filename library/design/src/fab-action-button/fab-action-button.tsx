import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { Pressable, Text } from 'react-native';

import { CoinsImage, DiscountCouponsImage, MoneyImage } from '../images';

import { createTypeStyle } from './styles/type/type.style.ts';
import { createStyles } from './default.styles.ts';

type Props = {
  type: 'withdrawal' | 'payService' | 'topUp';
  onPress: () => void;
};

export const FabActionButton: React.FC<Props> = ({ type, onPress }) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  const typeStyles = React.useMemo(() => createTypeStyle(theme, type), [theme, type]);
  const handlePress = () => {
    onPress();
  };

  const Image = React.useMemo(() => {
    switch (type) {
      case 'topUp':
        return CoinsImage;
      case 'withdrawal':
        return MoneyImage;
      case 'payService':
        return DiscountCouponsImage;
    }
  }, [type]);

  const title = React.useMemo(() => {
    switch (type) {
      case 'topUp':
        return 'Пополнить кошелек';
      case 'withdrawal':
        return 'Вывести средства';
      case 'payService':
        return 'Оплатить сервис';
    }
  }, [type]);

  return (
    <Pressable style={[baseStyles.wrapper, typeStyles.wrapper]} onPress={handlePress}>
      <Image style={baseStyles.icon} />
      <Typography size={'body-s'} weight={'medium'}>
        <Text style={typeStyles.text}>{title}</Text>
      </Typography>
    </Pressable>
  );
};
