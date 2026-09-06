import { Badge, useTheme } from '@library/kit';
import { OperationStatusEntity } from '@library/domain';
import { operationStatus } from '@utils/format';

import React from 'react';
import { View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  status: OperationStatusEntity;
}

export const OperationStatus: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);

  switch (props.status.type) {
    case 'Failed':
      return (
        <View style={baseStyles.wrapper}>
          <Badge size={'sm'} color={'red'} label={operationStatus(props.status.type)} />
        </View>
      );
    case 'Succeeded':
      return (
        <View style={baseStyles.wrapper}>
          <Badge size={'sm'} color={'green'} label={operationStatus(props.status.type)} />
        </View>
      );
    default:
      return (
        <View style={baseStyles.wrapper}>
          <Badge size={'sm'} color={'blue'} label={operationStatus(props.status.type)} />
        </View>
      );
  }
};
