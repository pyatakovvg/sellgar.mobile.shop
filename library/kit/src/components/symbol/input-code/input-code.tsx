import React from 'react';
import { View, TextInputProps } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

import { useTheme } from '../../../theme';

import { createStyle } from './default.styles.ts';
import { createTargetStyle } from './styles/target/target.style.ts';
import { createDisabledStyle } from './styles/disabled/disabled.style.ts';

const INPUT_MASK = '9 9 9 9 9 9';
const INPUT_PLACEHOLDER = '0 0 0 0 0 0';

export interface IProps extends Omit<TextInputProps, 'size' | 'style'> {
  target?: 'destructive';
  disabled?: boolean;
}

type TFocusEvent = Parameters<NonNullable<TextInputProps['onFocus']>>[0];
type TBlurEvent = Parameters<NonNullable<TextInputProps['onBlur']>>[0];

export const InputCode: React.FC<IProps> = React.forwardRef(({ target, ...props }, ref) => {
  const textInputRef = React.useRef(null);

  const { theme } = useTheme();

  const [isFocused, setFocused] = React.useState(false);

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
  const disabledStyles = React.useMemo(() => createDisabledStyle(theme), [theme]);
  const targetStyles = React.useMemo(() => createTargetStyle(theme, target), [theme, target]);

  React.useImperativeHandle(ref, () => textInputRef.current!);

  React.useEffect(() => {
    if (isFocused && props.disabled) {
      setFocused(false);
    }
  }, [props.disabled]);

  const handleFocus = (event: TFocusEvent) => {
    setFocused(true);
    props.onFocus && props.onFocus(event);
  };

  const handleBlur = (event: TBlurEvent) => {
    setFocused(false);
    props.onBlur && props.onBlur(event);
  };

  const handleChange = (value: string) => {
    props.onChangeText && props.onChangeText(value);
  };

  return (
    <View
      style={[
        baseStyles.wrapper,
        targetStyles.wrapper,
        isFocused && baseStyles.wrapper_focus,
        props.disabled && disabledStyles.wrapper,
      ]}
    >
      <MaskedTextInput
        ref={textInputRef}
        placeholderTextColor={theme.colors.text.base.tertiary}
        style={[baseStyles.element, props.disabled && disabledStyles.element]}
        mask={INPUT_MASK}
        value={props.value}
        placeholder={INPUT_PLACEHOLDER}
        editable={!props.disabled}
        multiline={false}
        keyboardType="numeric"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(_, value) => handleChange(value)}
      />
    </View>
  );
});
