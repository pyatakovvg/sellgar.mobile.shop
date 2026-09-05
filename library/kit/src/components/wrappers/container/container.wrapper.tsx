import React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../theme';

import { createStyle } from './default.styles.ts';

interface IProps {}

export const ContainerWrapper: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);

  return <View style={[baseStyles.wrapper]}>{props.children}</View>;
};
