import { OperationEntity } from '@library/domain';

import React from 'react';
import { View } from 'react-native';

import { Failed } from './failed';
import { Success } from './success';

import { createStyles } from './default.styles.ts';

export interface IProps {
  data: OperationEntity;
  bottomSlot: React.ReactNode;
}

export const OperationResult: React.FC<IProps> = (props) => {
  const baseStyle = React.useMemo(() => createStyles(), []);

  return (
    <View style={baseStyle.wrapper}>
      {props.data?.status.type !== 'Failed' && <Success {...props} />}
      {props.data?.status.type === 'Failed' && <Failed {...props} />}
    </View>
  );
};
