import React from 'react';
import { View, TextInput, TextInputProps, TextProps, TouchableOpacity } from 'react-native';

import { useTheme } from '../../../theme';
import { Button } from './button';

import { createStyle } from './default.styles.ts';
import { createSizeStyle } from './styles/size/size.style.ts';
import { createTargetStyle } from './styles/target/target.style.ts';
import { createDisabledStyle } from './styles/disabled/disabled.style.ts';
import { createTypeStyle } from './styles/type/type.style.ts';

export interface IProps extends Omit<TextInputProps, 'size' | 'style'> {
  type?: 'default' | 'borderless';
  size?: 'xs' | 'md';
  target?: 'destructive';
  badge?: React.ReactNode;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  onTailIconPress?: () => void;
  disabled?: boolean;
  button?: React.ReactElement<React.ComponentProps<typeof Button>>;
  renderTextInput?: (props: TextInputProps & { ref: React.RefObject<TextInput | null> }) => React.ReactElement;
}

type TFocusEvent = Parameters<NonNullable<TextInputProps['onFocus']>>[0];
type TBlurEvent = Parameters<NonNullable<TextInputProps['onBlur']>>[0];

const InputComponent = React.forwardRef<TextInput, IProps>(
  (
    { type = 'default', disabled, size = 'md', target, leadIcon, tailIcon, badge, button, renderTextInput, ...props },
    ref,
  ) => {
    const textInputRef = React.useRef(null);
    const { theme } = useTheme();

    const [isFocused, setFocused] = React.useState(false);

    const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
    const typeStyles = React.useMemo(() => createTypeStyle(theme, type), [theme, type]);
    const sizeStyles = React.useMemo(() => createSizeStyle(size), [size]);
    const disabledStyles = React.useMemo(() => createDisabledStyle(theme, type), [theme, type]);
    const targetStyles = React.useMemo(() => createTargetStyle(theme, target, type), [theme, target, type]);
    React.useImperativeHandle(ref, () => textInputRef.current!);

    React.useEffect(() => {
      if (isFocused && disabled) {
        setFocused(false);
      }
    }, [disabled]);

    const handleFocus = (event: TFocusEvent) => {
      setFocused(true);
      props.onFocus && props.onFocus(event);
    };

    const handleBlur = (event: TBlurEvent) => {
      setFocused(false);
      props.onBlur && props.onBlur(event);
    };

    const inputNode = (
      <View
        style={[
          baseStyles.wrapper,
          typeStyles.wrapper,
          sizeStyles.wrapper,
          targetStyles.wrapper,
          isFocused && baseStyles.wrapper_focus,
          disabled && disabledStyles.wrapper,
          !!button && baseStyles.wrapper_with_button,
        ]}
      >
        {leadIcon && (
          <View style={[baseStyles.leadIcon, sizeStyles.leadIcon]}>
            {React.Children.map(leadIcon, (child) => {
              if (React.isValidElement(child)) {
                const cloneElement = child as React.ReactElement<TextProps, any>;
                return React.cloneElement(cloneElement, {
                  style: [baseStyles.icon, sizeStyles.icon, disabled && disabledStyles.icon],
                });
              }
              return null;
            })}
          </View>
        )}
        <View style={baseStyles.content}>
          {renderTextInput ? (
            renderTextInput({
              ...props,
              ref: textInputRef,
              placeholderTextColor: theme.colors.text.base.tertiary,
              style: [
                baseStyles.element,
                sizeStyles.element,
                typeStyles.element,
                disabled && disabledStyles.element,
                targetStyles.element,
              ],
              editable: !disabled,
              multiline: false,
              autoCapitalize: 'none',
              onFocus: handleFocus,
              onBlur: handleBlur,
            })
          ) : (
            <TextInput
              {...props}
              ref={textInputRef}
              placeholderTextColor={theme.colors.text.base.tertiary}
              style={[
                baseStyles.element,
                sizeStyles.element,
                typeStyles.element,
                disabled && disabledStyles.element,
                targetStyles.element,
              ]}
              editable={!disabled}
              multiline={false}
              autoCapitalize="none"
              onFocus={(event) => handleFocus(event)}
              onBlur={(event) => handleBlur(event)}
            />
          )}
        </View>
        {badge && (
          <View style={[baseStyles.badge]}>
            {React.Children.map(badge, (child) => {
              if (React.isValidElement(child)) {
                const cloneElement = child as React.ReactElement<any, any>;
                return React.cloneElement(cloneElement, {
                  disabled,
                  size: 'sm',
                  color: 'gray',
                });
              }
              return null;
            })}
          </View>
        )}
        {tailIcon && (
          <TouchableOpacity
            disabled={!props.onTailIconPress}
            onPress={props?.onTailIconPress}
            style={[baseStyles.tailIcon, sizeStyles.tailIcon]}
          >
            {React.Children.map(tailIcon, (child) => {
              if (React.isValidElement(child)) {
                const cloneElement = child as React.ReactElement<any, any>;
                return React.cloneElement(cloneElement, {
                  style: [baseStyles.icon, sizeStyles.icon, disabled && disabledStyles.icon],
                });
              }
              return null;
            })}
          </TouchableOpacity>
        )}
      </View>
    );

    if (button) {
      return (
        <View style={baseStyles.container}>
          {inputNode}
          {React.cloneElement(button, { size })}
        </View>
      );
    }

    return inputNode;
  },
);

type TInput = typeof InputComponent & {
  Button: typeof Button;
};

export const Input: TInput = Object.assign(InputComponent, {
  Button,
});
