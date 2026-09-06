import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  label: string;
  value: string | number;
}

export const InfoLine: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.label}>
        <Typography size={'caption-l'} weight={'regular'}>
          <Text style={baseStyles.label_text}>{props.label}</Text>
        </Typography>
      </View>
      <View style={baseStyles.divider} />
      <View style={baseStyles.value}>
        <Typography size={'body-s'} weight={'regular'}>
          <Text style={baseStyles.value_text}>{props.value}</Text>
        </Typography>
      </View>
    </View>
  );
};
