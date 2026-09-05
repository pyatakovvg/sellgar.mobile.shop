import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '../../../theme';

import { Typography } from '../typography';

import { createStyle } from './default.styles.ts';

export interface IProps {
  label: string;
  caption?: string;
  required?: boolean;
}

export const Label: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={[baseStyles.wrapper]}>
      <View style={[baseStyles.label]}>
        <Typography size={'caption-l'} weight={'medium'}>
          <Text style={[baseStyles.label_text]}>{props.label}</Text>
        </Typography>
      </View>
      {props.caption && (
        <View style={[baseStyles.caption]}>
          <Typography size={'caption-l'} weight={'regular'}>
            <Text style={[baseStyles.caption_text]}>{props.caption}</Text>
          </Typography>
        </View>
      )}
      {props.required && (
        <View style={[baseStyles.required]}>
          <Typography size={'caption-l'} weight={'regular'}>
            <Text style={[baseStyles.required_text]}>*</Text>
          </Typography>
        </View>
      )}
    </View>
  );
};
