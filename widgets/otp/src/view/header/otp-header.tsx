import { Image, Typography, useTheme } from '@library/kit';
import { phoneHiddenFormat } from '@utils/format';

import React from 'react';
import { Text, View } from 'react-native';
import { createStyles } from './default.styles.ts';

interface OtpHeaderProps {
  readonly phone: string;
}

export const OtpHeader: React.FC<OtpHeaderProps> = ({ phone }) => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.wrapper}>
      <Image source={require('./otp.icon.png')} style={styles.icon} />
      <View style={styles.header}>
        <Typography size="h6" weight="semi-bold">
          <Text style={styles.headerText}>Введите код из SMS</Text>
        </Typography>
      </View>
      <Typography size="caption-l" weight="regular">
        <Text style={styles.description}>Код отправлен на {phoneHiddenFormat(phone)}</Text>
      </Typography>
    </View>
  );
};
