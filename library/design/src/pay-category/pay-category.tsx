import { Typography, useTheme, Icon, TIconName } from '@library/kit';

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { createStyles } from './default.styles.ts';

interface IProps {
  title: string;
  iconName: TIconName;
  isActive?: boolean;
  onPress(): void;
}

export const PayCategory: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  const handlePress = () => {
    props.onPress && props.onPress();
  };

  const Container = props.isActive ? LinearGradient : View;

  return (
    <TouchableOpacity style={baseStyles.wrapper} onPress={handlePress}>
      <Container
        colors={['#6E97FF', '#4176FF', '#5984F2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[baseStyles.container, props.isActive ? {} : baseStyles.inactive]}
      >
        <Icon
          icon={props.iconName}
          style={[baseStyles.icon, props.isActive ? baseStyles.icon_active : baseStyles.icon_inactive]}
        />
      </Container>
      <Typography size={'caption-m'} weight={'light'}>
        <Text style={baseStyles.text} numberOfLines={2}>
          {props.title}
        </Text>
      </Typography>
    </TouchableOpacity>
  );
};
