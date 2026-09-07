import { Icon, useTheme } from '@library/kit';

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  withBackBtn?: boolean;
  onPressBack?: () => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={baseStyles.wrapper}>
      {props.withBackBtn && (
        <TouchableOpacity onPress={props.onPressBack}>
          <Icon icon={'arrow-left-s-line'} style={baseStyles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
