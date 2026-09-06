import type { OtpEntity } from '@library/domain';
import { Button, Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { useOtpCountdown } from '../hook/use-otp-countdown.ts';
import { createStyles } from './default.styles.ts';

interface OtpTimerProps {
  readonly data: OtpEntity;
  readonly inProcess: boolean;
  readonly onResend: () => Promise<void>;
}

export const OtpTimer: React.FC<OtpTimerProps> = ({ data, inProcess, onResend }) => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const remaining = useOtpCountdown(data.deliveryContext.nextAttempt, data.deliveryContext.untilNextAttemptSec);
  const attemptsAvailable = data.deliveryContext.usedAttempts < data.deliveryContext.totalAttempts;

  if (!attemptsAvailable) {
    return null;
  }

  if (remaining === 0) {
    return (
      <View style={styles.wrapper}>
        <Button loading={inProcess} onPress={() => void onResend()} style="tertiary">
          Запросить новый код
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Typography size="caption-m" weight="regular">
        <Text style={styles.text}>Запросить повторно можно через {formatCountdown(remaining)}</Text>
      </Typography>
    </View>
  );
};

const formatCountdown = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
};
