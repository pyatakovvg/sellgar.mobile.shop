import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyle } from './default.styles.ts';

interface IProps {
  header?: string;
  content: string;
}

export const Alert: React.FC<IProps> = (props) => {
  const { theme } = useTheme()

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
  return (
    <View style={baseStyles.wrapper}>
      {props.header && (
          <Typography size={'caption-l'} weight={'semi-bold'}>
            <Text style={baseStyles.header}>{props.header}</Text>
          </Typography>
      )}
        <Typography size={'caption-m'} weight={'medium'}>
          <Text style={baseStyles.content}>{props.content}</Text>
        </Typography>
    </View>
  );
};
