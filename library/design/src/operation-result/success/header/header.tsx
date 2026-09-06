import { Icon, Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  onHistoryPress?: () => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.wrapper}>
      <Icon style={baseStyles.icon} icon={'checkbox-circle-line'} />
      <Typography size={'body-l'} weight={'semi-bold'}>
        <Text style={baseStyles.content}>{'Операция\nпроведена'}</Text>
      </Typography>
      <Typography size={'caption-l'} weight={'regular'}>
        <Text style={baseStyles.description}>
          {'Платеж можно найти\nв '}
          <Text style={baseStyles.link} onPress={props.onHistoryPress}>
            истории операций
          </Text>
        </Text>
      </Typography>
    </View>
  );
};
