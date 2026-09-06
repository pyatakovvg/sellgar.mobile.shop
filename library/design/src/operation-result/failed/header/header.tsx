import { Icon, Typography } from '@library/kit';
import { useTheme } from '@library/kit';

import React from 'react';
import { Linking, Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

export const Header = () => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), []);

  return (
    <View style={baseStyles.wrapper}>
      <Icon style={baseStyles.icon} icon={'error-warning-line'} />
      <Typography size={'body-l'} weight={'bold'}>
        <Text style={baseStyles.content}>{'При проведении платежа\nпроизошла ошибка'}</Text>
      </Typography>
      <Typography size={'body-s'} weight={'medium'}>
        <Text style={baseStyles.description}>
          {'Попробуйте снова\nи, если ошибка повторяется,\nнапишите в '}
          <Text
            style={[baseStyles.description, baseStyles.linkText]}
            onPress={() => Linking.openURL('mailto:support@tiyn.io')}
          >
            службу поддержки
          </Text>
        </Text>
      </Typography>
    </View>
  );
};
