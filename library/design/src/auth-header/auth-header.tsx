import { Typography, useTheme, Image } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  title: string;
  description: string;
  icon: 'profile' | 'lock';
}

export const AuthHeader: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.wrapper}>
      <Image
        source={props.icon === 'profile' ? require('./profle.icon.png') : require('./lock.icon.png')}
        style={baseStyles.icon}
      />
      <View style={baseStyles.header}>
        <Typography size={'h6'} weight={'semi-bold'}>
          <Text style={baseStyles.header_text}>{props.title}</Text>
        </Typography>
      </View>
      <Typography size={'body-s'} weight={'regular'}>
        <Text style={baseStyles.description_text}>{props.description}</Text>
      </Typography>
    </View>
  );
};
