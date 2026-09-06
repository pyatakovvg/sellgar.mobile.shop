import { Icon, type TIconName, Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { createStyles } from './default.styles.ts';

interface IProps {
  title: string;
  icon: TIconName;
  settingsActive?: boolean;
  onProfilePress?: () => void;
  onSettingsPress?: () => void;
}

export const TabHeader: React.FC<IProps> = (props) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.container}>
        <TouchableOpacity
          disabled={!props.onProfilePress}
          onPress={props.onProfilePress}
          style={baseStyles.userName}
        >
          <View style={baseStyles.titleIconView}>
            <Icon icon={props.icon} style={baseStyles.titleIcon} />
          </View>
          <Typography size={'body-m'} weight={'medium'}>
            <Text style={baseStyles.title}>{props.title}</Text>
          </Typography>
          {/*<Icon icon={'arrow-right-s-line'} style={baseStyles.arrowIcon} />*/}
        </TouchableOpacity>
        <View style={baseStyles.iconsGroup}>
          <TouchableOpacity
            disabled={props.settingsActive || !props.onSettingsPress}
            onPress={props.onSettingsPress}
            style={baseStyles.iconButton}
          >
            <Icon
              icon={'settings-3-line'}
              style={[baseStyles.icon, props.settingsActive && baseStyles.iconActive]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
