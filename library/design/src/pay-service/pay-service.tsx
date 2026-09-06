import { Image, Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import liberalitasIcon from './icons/liberalitas.svg';
import sattyZhuldysIcon from './icons/satty_zhuldys.svg';
import defaultServiceIcon from './icons/default-service.svg';

import { createStyles } from './default.styles.ts';

const iconByCategory: Record<string, any> = {
  default: defaultServiceIcon,
  satty_zhuldys: sattyZhuldysIcon,
  liberalitas: liberalitasIcon,
};

interface IProps {
  size?: 'md' | 'sm';
  title: string;
  methodName: string;
  iconUrl?: string;
}

export const PayService: React.FC<IProps> = ({ size = 'md', ...props }) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  const sizeStyles = React.useMemo(
    () => ({
      container: size === 'md' ? baseStyles.containerMd : baseStyles.containerSm,
      content: size === 'md' ? baseStyles.contentMd : baseStyles.contentSm,
    }),
    [theme, size, baseStyles],
  );

  const renderIcon = React.useCallback(() => {
    if (props.iconUrl) {
      return <Image source={{ uri: props.iconUrl }} width={size === 'md' ? 43 : 28} height={size === 'md' ? 43 : 28} />;
    }
    let Icon = iconByCategory['default'];
    if (props.methodName in iconByCategory) {
      Icon = iconByCategory[props.methodName];
    }
    return <Icon width={size === 'md' ? 43 : 28} height={size === 'md' ? 43 : 28} />;
  }, []);

  return (
    <View style={baseStyles.wrapper}>
      <View style={[baseStyles.container, sizeStyles.container]}>{renderIcon()}</View>
      {size !== 'sm' && (
        <View style={[baseStyles.content, sizeStyles.content]}>
          <Typography size={'caption-l'} weight={'medium'}>
            <Text style={baseStyles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </Typography>
        </View>
      )}
    </View>
  );
};
