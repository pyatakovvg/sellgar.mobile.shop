import { useTheme } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { Button, Typography } from '../../symbol';

import { createStyles } from './default.styles.ts';

interface IEmptyProps {
  type?: undefined;
}

interface ILabelProps {
  type?: 'label-left' | 'label-center';
  label: string;
}

interface IActionProps {
  type?: 'action-center';
  actionLabel: string;
}

type IProps = IEmptyProps | ILabelProps | IActionProps;

export const Divider: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyle = createStyles(theme);

  switch (props.type) {
    case 'label-left':
      return (
        <View style={baseStyle.wrapper}>
          <View style={baseStyle.left}>
            <Typography size={'caption-m'} weight={'medium'}>
              <Text style={baseStyle.text}>{props.label}</Text>
            </Typography>
          </View>
          <View style={baseStyle.line} />
        </View>
      );
    case 'label-center':
      return (
        <View style={baseStyle.wrapper}>
          <View style={baseStyle.line} />
          <View style={baseStyle.center}>
            <Typography size={'caption-m'} weight={'medium'}>
              <Text style={baseStyle.text}>{props.label}</Text>
            </Typography>
          </View>
          <View style={baseStyle.line} />
        </View>
      );
    case 'action-center':
      return (
        <View style={baseStyle.wrapper}>
          <View style={baseStyle.line} />
          <View style={baseStyle.center}>
            <Button style={'secondary'} size={'xs'}>
              {props.actionLabel}
            </Button>
          </View>
          <View style={baseStyle.line} />
        </View>
      );
    default:
      return (
        <View style={baseStyle.wrapper}>
          <View style={baseStyle.line} />
        </View>
      );
  }
};
