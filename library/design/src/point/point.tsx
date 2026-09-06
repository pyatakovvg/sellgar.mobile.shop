import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  number: number;
}

export const Point: React.FC<React.PropsWithChildren<IProps>> = ({ number, ...props }) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.numberView}>
        <Typography size={'caption-l'} weight={'regular'}>
          <Text style={baseStyles.text}>{number}</Text>
        </Typography>
      </View>
      <View style={baseStyles.content}>
        <Typography size={'caption-l'} weight={'regular'}>
          {props.children}
        </Typography>
      </View>
    </View>
  );
};
