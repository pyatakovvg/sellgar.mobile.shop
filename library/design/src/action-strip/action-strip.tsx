import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  withoutBorder?: boolean;
  description?: string;
}

export const ActionStrip: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[baseStyles.wrapper, { borderWidth: props.withoutBorder ? 0 : 1 }]}>
      {props.leadIcon && (
        <View style={baseStyles.icon}>
          {React.Children.map(props.leadIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [baseStyles.lead_icon, cloneElement.props?.style],
              });
            }
            return child;
          })}
        </View>
      )}
      <View style={baseStyles.content}>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            const cloneElement = child as React.ReactElement<any, any>;
            return React.cloneElement(cloneElement, {
              style: [baseStyles.text, cloneElement.props?.style],
            });
          }
          return child;
        })}
        {props.description && (
          <Typography size={'body-s'} weight={'regular'}>
            <Text style={baseStyles.description}>{props.description}</Text>
          </Typography>
        )}
      </View>
      {props.tailIcon && (
        <View style={baseStyles.icon}>
          {React.Children.map(props.tailIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<any, any>;
              return React.cloneElement(cloneElement, {
                style: [baseStyles.tailIcon, cloneElement.props?.style],
              });
            }
            return child;
          })}
        </View>
      )}
    </View>
  );
};
