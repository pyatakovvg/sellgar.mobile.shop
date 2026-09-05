import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../theme';
import { createStyles } from './default.styles.ts';

interface IProps {
  active: boolean;
  error?: boolean;
}
export const Dot: React.FC<IProps> = (props) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);

  return (
    <View
      style={[baseStyles.content, props.error ? baseStyles.errorBg : {}, props.active ? baseStyles.activeBg : {}]}
    />
  );
};
