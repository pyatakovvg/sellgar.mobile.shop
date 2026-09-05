import React from 'react';
import { View } from 'react-native';

import { context } from '../../../../theme/theme.context.ts';

import { Icon } from '../../icon';

import { createStyle } from './default.styles.ts';
import { createSizeStyle } from './styles/size/size.style.ts';
import { createStateStyle } from './styles/state/state.style.ts';
import { createDisabledStyle } from './styles/disabled/disabled.style.ts';

export interface IProps {
  size?: 'sm' | 'md';
  checked?: boolean;
  disabled?: boolean;
}

export const Element: React.FC<IProps> = ({ size = 'md', ...props }) => {
  const { theme } = React.useContext(context);

  const baseStyle = React.useMemo(() => createStyle(theme), [theme]);
  const disabledStyle = React.useMemo(() => createDisabledStyle(theme), [theme]);
  const sizeStyle = React.useMemo(() => createSizeStyle(theme, size), [theme, size]);
  const stateStyle = React.useMemo(() => createStateStyle(theme, props.checked), [theme, props.checked]);

  return (
    <View style={[baseStyle.wrapper, sizeStyle.wrapper, stateStyle.wrapper, props.disabled && disabledStyle.wrapper]}>
      {props.checked && <Icon style={[baseStyle.icon, sizeStyle.icon, stateStyle.icon]} icon={'check-fill'} />}
    </View>
  );
};
