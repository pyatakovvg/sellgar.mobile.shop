import { Icon, TiynWhite, useTheme } from '@library/kit';

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  withBackBtn?: boolean;
  onPressBack?: () => void;
}

export const WhiteLogoHeader: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);

  return (
    <View style={baseStyles.wrapper}>
      {props.withBackBtn && (
        <TouchableOpacity style={baseStyles.iconView} onPress={props.onPressBack}>
          <Icon style={baseStyles.icon} icon={'arrow-left-s-line'} />
        </TouchableOpacity>
      )}
      <View style={baseStyles.logotype}>
        <TiynWhite />
      </View>
    </View>
  );
};
