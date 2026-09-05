import React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../../theme';
import { Icon } from '../../icon';
import { Animate } from '../../../utils';

import { createStyles } from './default.styles.ts';

interface IProps {
  size: number;
}

export const Process: React.FC<IProps> = (props) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={baseStyles.wrapper}>
      <Animate.Spin>
        <Icon style={[baseStyles.icon, { fontSize: props.size }]} icon={'loader-4-fill'} />
      </Animate.Spin>
    </View>
  );
};
