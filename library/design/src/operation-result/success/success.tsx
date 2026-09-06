import React from 'react';
import { View } from 'react-native';

import { Header } from './header';
import { OperationInfo } from '../operation-info';

import type { IProps } from '../operation-result.tsx';

import { createStyles } from './default.styles.ts';

export const Success: React.FC<IProps> = (props) => {
  const baseStyles = React.useMemo(() => createStyles(), []);

  return (
    <View style={baseStyles.wrapper}>
      <Header />
      <View style={baseStyles.content}>
        <OperationInfo data={props.data} />
      </View>
      {props.bottomSlot && <View style={baseStyles.control}>{props.bottomSlot}</View>}
    </View>
  );
};
