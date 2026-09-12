import React from 'react';
import { Text, View } from 'react-native';

import { useTheme } from '../../../../../theme';
import { Typography } from '../../../typography';

import { createStyles } from './default.styles.ts';

interface IProps {
  size?: 'lg' | 'md' | 'sm';
  isActive?: boolean;
  title: string;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  badge?: React.ReactNode;
}

export const Line: React.FC<IProps> = ({ size = 'lg', ...props }) => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme, size), [size, theme]);

  return (
    <View style={[styles.wrapper, props.isActive && styles.wrapperActive]}>
      {props.leadIcon ? <View style={styles.icon}>{props.leadIcon}</View> : null}
      <Typography size={size === 'sm' ? 'caption-l' : 'body-s'} weight={'semi-bold'}>
        <Text style={[styles.title, props.isActive && styles.titleActive]}>{props.title}</Text>
      </Typography>
      {props.badge ? <View style={styles.badge}>{props.badge}</View> : null}
      {props.tailIcon ? <View style={styles.icon}>{props.tailIcon}</View> : null}
    </View>
  );
};
