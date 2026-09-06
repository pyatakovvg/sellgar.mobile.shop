import { OperationEntity } from '@library/domain';
import { dateFormat, timeFormat, operationType, formatNumeral } from '@utils/format';

import React from 'react';
import { View } from 'react-native';

import { InfoLine } from '../../info-line';

import { createStyles } from './default.styles.ts';

interface IProps {
  data: OperationEntity;
}

export const OperationInfo: React.FC<IProps> = (props) => {
  const baseStyles = React.useMemo(() => createStyles(), []);

  return (
    <View style={baseStyles.wrapper}>
      <View>
        <InfoLine label={'ID операции'} value={'**** ' + props.data.uuid.slice(-6)} />
      </View>
      <View style={baseStyles.field}>
        <InfoLine label={'Дата'} value={dateFormat(props.data.createdAt) + ' ' + timeFormat(props.data.createdAt)} />
      </View>
      <View style={baseStyles.field}>
        <InfoLine label={'Тип операции'} value={operationType(props.data.type)} />
      </View>
      <View style={baseStyles.field}>
        <InfoLine label={'Сумма зачисления'} value={formatNumeral(props.data.amount) + ' ' + props.data.currency} />
      </View>
      <View style={baseStyles.field}>
        <InfoLine label={'Комиссия'} value={formatNumeral(props.data.fee) + ' ' + props.data.currency} />
      </View>
      <View style={baseStyles.field}>
        <InfoLine label={'Сумма списания'} value={formatNumeral(props.data.totalAmount) + ' ' + props.data.currency} />
      </View>
    </View>
  );
};
