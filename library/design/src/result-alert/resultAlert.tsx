import { ContainerWrapper, Typography } from '@library/kit';
import { useTheme, Image } from '@library/kit';

import React from 'react';
import { Text, View, ViewProps } from 'react-native';

import ErrorIcon from './error.icon.svg';

import { createStyles } from './default.styles.ts';

interface IProps extends ViewProps {
  title: string;
  description: string | React.ReactNode;
  type: 'warning' | 'error' | 'success' | 'info';
  bottomSlot?: React.ReactNode;
  customIcon?: React.ReactNode;
}

export const ResultAlert: React.FC<IProps> = ({ title, description, bottomSlot, type, customIcon }) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  const renderIcon = React.useCallback(() => {
    switch (type) {
      case 'warning':
        return <Image source={require('./warning.icon.png')} style={baseStyles.icon} />;
      case 'error':
        return <ErrorIcon style={baseStyles.icon} />;
      case 'success':
        return <Image source={require('./success.icon.png')} style={baseStyles.icon} />;
      case 'info':
        return <Image source={require('./info.icon.png')} style={baseStyles.icon} />;
    }
  }, [type]);

  return (
    <ContainerWrapper>
      <View style={baseStyles.wrapper}>
        {customIcon ?? renderIcon()}
        <Typography size={'body-m'} weight={'semi-bold'}>
          <Text style={baseStyles.title}>{title}</Text>
        </Typography>
        <Typography size={'body-s'} weight={'regular'}>
          <Text style={baseStyles.description}>{description}</Text>
        </Typography>
        {!!bottomSlot && <View style={baseStyles.control}>{bottomSlot}</View>}
      </View>
    </ContainerWrapper>
  );
};
