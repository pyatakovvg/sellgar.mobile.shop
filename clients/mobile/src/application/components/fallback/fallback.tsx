import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

export const Fallback: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={theme.colors.text.status.info} size="large" />
      <Typography size="body-m" weight="medium">
        <Text style={styles.text}>Загрузка...</Text>
      </Typography>
    </View>
  );
};
