import { Animate, Dot, Icon, useTheme } from '@library/kit';

import { View, ViewStyle } from 'react-native';
import React from 'react';

import { createStyles } from './default.styles.ts';

interface IProps {
  dots: boolean[];
  loading?: boolean;
  error?: boolean;
  itemContainerStyle?: ViewStyle;
}

export const Dots: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.content}>
      {props.loading ? (
        <Animate.Spin>
          <Icon style={baseStyles.spinner_icon} icon={'loader-4-line'} />
        </Animate.Spin>
      ) : (
        props.dots.map((state, index) => (
          <View style={[baseStyles.item, props.itemContainerStyle ?? {}]} key={index.toString()}>
            <Dot error={props.error} active={state} />
          </View>
        ))
      )}
    </View>
  );
};
