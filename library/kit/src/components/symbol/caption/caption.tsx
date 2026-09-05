import React from 'react';
import { View, Text, TextProps } from 'react-native';

import { useTheme } from '../../../theme';

import { Typography } from '../typography';

import { createStyle } from './default.styles.ts';
import { createStateStyle } from './styles/state/state.style.ts';

export interface IProps {
  leadIcon?: React.ReactNode;
  caption: string;
  state?: 'info' | 'success' | 'destructive';
}

export const Caption: React.FC<IProps> = ({ state, ...props }) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
  const stateStyles = React.useMemo(() => createStateStyle(theme, state), [theme, state]);

  return (
    <View style={[baseStyles.wrapper]}>
      {props.leadIcon && (
        <View style={[baseStyles.leadIcon]}>
          {React.Children.map(props.leadIcon, (child) => {
            if (React.isValidElement(child)) {
              const cloneElement = child as React.ReactElement<TextProps, any>;
              return React.cloneElement(cloneElement, {
                style: [baseStyles.icon, stateStyles.icon],
              });
            }
            return null;
          })}
        </View>
      )}
      <View style={[baseStyles.caption]}>
        <Typography size={'caption-l'} weight={'regular'}>
          <Text style={[baseStyles.caption_text, stateStyles.caption_text]}>{props.caption}</Text>
        </Typography>
      </View>
    </View>
  );
};
