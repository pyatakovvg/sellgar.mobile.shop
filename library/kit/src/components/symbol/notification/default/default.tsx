import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';

import { Icon } from '../../icon';
import { Typography } from '../../typography';
import { useTheme } from '../../../../theme';

import { createStyle } from './default.styles.ts';

interface IProps {
  status?: 'info' | 'warning' | 'destructive' | 'success';
  title?: React.ReactNode;
  description?: React.ReactNode;
  slot?: React.ReactNode;
  onClose?(): void;
}

export const Default: React.FC<IProps> = ({ status = 'info', ...props }) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);

  const iconStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        baseStyles.icon,
        status === 'info' && baseStyles.icon_info,
        status === 'warning' && baseStyles.icon_warning,
        status === 'success' && baseStyles.icon_success,
        status === 'destructive' && baseStyles.icon_destructive,
      ]),
    [status],
  );

  const handleClose = (event: GestureResponderEvent) => {
    event.stopPropagation();

    props.onClose && props.onClose();
  };

  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.aside}>
        <Icon style={iconStyle} icon={'error-warning-fill'} />
      </View>
      <View style={baseStyles.content}>
        <View style={baseStyles.container}>
          {props.title && (
            <Typography size={'body-s'} weight={'medium'}>
              <Text style={baseStyles.title}>{props.title}</Text>
            </Typography>
          )}
          {props.description && (
            <Typography size={'caption-l'} weight={'regular'}>
              <Text style={baseStyles.description}>{props.description}</Text>
            </Typography>
          )}
        </View>
        {props.slot && (
          <View>
            {React.Children.map(props.slot, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child);
              }
              return child;
            })}
          </View>
        )}
      </View>
      {props.onClose && (
        <Pressable onPress={handleClose} data-qa={'notification.close'}>
          <Icon style={baseStyles.close} icon={'close-line'} />
        </Pressable>
      )}
    </View>
  );
};
