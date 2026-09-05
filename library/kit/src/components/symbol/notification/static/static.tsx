import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '../../icon';
import { Typography } from '../../typography';
import { useTheme } from '../../../../theme';

import { createStyle } from './default.styles.ts';

interface IProps {
  status?: 'info' | 'warning' | 'destructive' | 'success' | 'neutral';
  size?: 'sm' | 'md';
  title?: React.ReactNode;
  description?: React.ReactNode;
  slot?: React.ReactNode;
}

export const Static: React.FC<IProps> = ({ status = 'info', size = 'md', ...props }) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);

  const wrapperClassName = React.useMemo(
    () =>
      StyleSheet.flatten([
        baseStyles.wrapper,
        size === 'sm' && baseStyles.wrapper_sm,
        status === 'info' && baseStyles.status_info,
        status === 'warning' && baseStyles.status_warning,
        status === 'success' && baseStyles.status_success,
        status === 'destructive' && baseStyles.status_destructive,
        status === 'neutral' && baseStyles.status_neutral,
      ]),
    [status, size],
  );

  const iconClassName = React.useMemo(
    () =>
      StyleSheet.flatten([
        baseStyles.icon,
        status === 'info' && baseStyles.icon_info,
        status === 'warning' && baseStyles.icon_warning,
        status === 'success' && baseStyles.icon_success,
        status === 'neutral' && baseStyles.icon_neutral,
      ]),
    [status],
  );

  return (
    <View style={wrapperClassName}>
      <View style={baseStyles.aside}>
        <Icon style={iconClassName} icon={'error-warning-fill'} />
        <View style={baseStyles.content}>
          <View style={baseStyles.container}>
            {props.title && (
              <Typography size={size === 'md' ? 'body-s' : 'caption-l'} weight={size === 'md' ? 'medium' : 'regular'}>
                <Text style={baseStyles.title}>{props.title}</Text>
              </Typography>
            )}
            {props.description && (
              <Typography size={'caption-l'} weight={'regular'}>
                <Text style={baseStyles.description}>{props.description}</Text>
              </Typography>
            )}
          </View>
        </View>
      </View>
      {props.slot && (
        <View style={baseStyles.slot}>
          {React.Children.map(props.slot, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child);
            }
            return child;
          })}
        </View>
      )}
    </View>
  );
};
