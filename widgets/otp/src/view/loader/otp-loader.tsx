import { Animate, Icon, useTheme } from '@library/kit';

import React from 'react';
import { View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface OtpLoaderProps {
  readonly inProcess: boolean;
}

export const OtpLoader: React.FC<OtpLoaderProps> = ({ inProcess }) => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  if (!inProcess) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Animate.Spin>
        <Icon icon="loader-2-line" style={styles.icon} />
      </Animate.Spin>
    </View>
  );
};
