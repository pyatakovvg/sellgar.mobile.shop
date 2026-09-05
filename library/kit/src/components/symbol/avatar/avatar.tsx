import React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../theme';

import { NotificationDot } from '../../misc';
import { Icon } from '../icon';

import { createSizeStyle } from './styles/size/size.style.ts';
import { createColorStyle } from './styles/color/color.style.ts';
import { createStyles } from './default.styles.ts';

interface IProps {
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  color?: 'gray' | 'green' | 'blue' | 'orange' | 'red' | 'purple';
  isStatus?: boolean;
  isNotification?: boolean;
}

export const Avatar: React.FC<IProps> = ({ size = '2xl', color = 'gray', ...props }) => {
  const { theme } = useTheme();
  const baseStyles = createStyles();
  const sizeStyles = createSizeStyle(size);
  const colorStyles = React.useMemo(() => createColorStyle(theme, color), [theme, color]);
  return (
    <View style={[baseStyles.wrapper, sizeStyles.wrapper]}>
      {props.isNotification && (
        <View style={baseStyles.notification}>
          <NotificationDot size={size} color={'red'} />
        </View>
      )}
      <View style={[baseStyles.content, colorStyles.content]}>
        <Icon style={[baseStyles.icon, colorStyles.icon, sizeStyles.icon]} icon={'user-3-line'} />
      </View>
      {props.isStatus && (
        <View style={baseStyles.status}>
          <NotificationDot size={size} color={'green'} />
        </View>
      )}
    </View>
  );
};
