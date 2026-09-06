import { Typography, Icon, Animate, useTheme } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  message: React.ReactNode;
}

export const ProcessPrompt: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.content}>
        <View style={baseStyles.header}>
          <Animate.Spin>
            <Icon style={baseStyles.icon} icon={'loader-4-fill'} />
          </Animate.Spin>
        </View>
        <View style={baseStyles.description}>
          <Typography size={'body-s'} weight={'regular'}>
            <Text style={baseStyles.description_text}>{props.message}</Text>
          </Typography>
        </View>
      </View>
    </View>
  );
};
