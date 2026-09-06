import { Typography, useTheme } from '@library/kit';
import { amountFormat } from '@utils/format';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';
import { createModeStyles } from './styles/mode.styles.ts';

interface IProps {
  value: number;
  currency: string;
  mode?: 'destructive' | 'success';
  isLineThrough?: boolean;
}

export const Amount: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);
  const modeStyles = createModeStyles(theme);

  const value = React.useMemo(() => {
    const amountFormated = amountFormat(props.value);

    if (props.value > 0) {
      return '+' + amountFormated;
    }

    return amountFormated;
  }, [props.value]);

  return (
    <View style={baseStyles.wrapper}>
      <Typography size={'caption-l'} weight={'medium'}>
        <Text
          style={[
            baseStyles.amount_text,
            props.mode === 'success' && modeStyles.success,
            props.mode === 'destructive' && modeStyles.destructive,
            props.isLineThrough && modeStyles.through,
          ]}
        >
          {value}
        </Text>
      </Typography>
      <Typography size={'caption-l'} weight={'medium'}>
        <Text style={[baseStyles.currency_text]}>{props.currency}</Text>
      </Typography>
    </View>
  );
};
