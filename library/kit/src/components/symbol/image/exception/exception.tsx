import React from 'react';
import { View } from 'react-native';

import { Icon } from '../../icon';
import { useTheme } from '../../../../theme';

import { createStyles } from './default.styles.ts';

interface IProps {
  size: number;
}

export const Exception: React.FC<IProps> = (props) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={baseStyles.wrapper}>
      <Icon icon={'error-warning-line'} style={[baseStyles.icon, { fontSize: props.size }]} />
    </View>
  );
};
