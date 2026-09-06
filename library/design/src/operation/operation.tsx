import { dateFormat, timeFormat } from '@utils/format';
import { OperationEntity } from '@library/domain';
import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { Amount } from '../amount';
import { OperationStatus } from './operation-status';

import { createStyles } from './default.styles.ts';

interface IProps {
  data: OperationEntity;
}

export const Operation: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);
  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.info}>
        <View style={baseStyles.description}>
          <Typography size={'caption-l'} weight={'medium'}>
            <Text style={baseStyles.description_text} numberOfLines={1} ellipsizeMode="tail" lineBreakMode="tail">
              {props.data.description}
            </Text>
          </Typography>
        </View>
        <View style={baseStyles.details}>
          <OperationStatus status={props.data.status} />
          <Typography size={'caption-m'} weight={'regular'}>
            <Text style={baseStyles.date_text}>
              {dateFormat(props.data.createdAt) + ' ' + timeFormat(props.data.createdAt)}
            </Text>
          </Typography>
        </View>
      </View>
      <View style={baseStyles.amount_status}>
        <Amount
          mode={
            props.data.status.type === 'Failed' ? 'destructive' : props.data.totalAmount > 0 ? 'success' : 'destructive'
          }
          value={props.data.totalAmount}
          currency={props.data.currency}
          isLineThrough={props.data.status.type === 'Failed'}
        />
      </View>
    </View>
  );
};
