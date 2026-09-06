import { Icon, Animate, useTheme } from '@library/kit';

import React from 'react';

interface IProps {
  size?: number;
  color?: string;
}

export const Spinner: React.FC<IProps> = ({ size = 32, color }) => {
  const { theme } = useTheme();

  const iconColor = color ?? theme.colors.icon.status.info;

  return (
    <Animate.Spin>
      <Icon
        style={{
          fontSize: size,
          color: iconColor,
        }}
        icon={'loader-4-line'}
      />
    </Animate.Spin>
  );
};
