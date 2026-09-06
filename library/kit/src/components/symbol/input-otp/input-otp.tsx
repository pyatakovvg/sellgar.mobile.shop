import React from 'react';
import { Platform, View } from 'react-native';
import { OtpInput, type OtpInputRef } from 'react-native-otp-entry';

import { useTheme } from '../../../theme';

import { createStyles } from './default.styles.ts';

interface IProps {
  onChange: (value: string) => void;
  onFilled?: (value: string) => void;
  length?: number;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export interface InputOtpHandle {
  blur(): void;
  clear(): void;
  focus(): void;
}

export const InputOtp = React.forwardRef<InputOtpHandle, IProps>(
  ({ onChange, onFilled, length = 6, disabled = false, error, autoFocus = false }, ref) => {
    const { theme } = useTheme();
    const baseStyles = React.useMemo(() => createStyles(theme, !!error), [theme, error]);
    const inputRef = React.useRef<OtpInputRef>(null);

    React.useImperativeHandle(
      ref,
      () => ({
        blur: () => inputRef.current?.blur(),
        clear: () => inputRef.current?.clear(),
        focus: () => inputRef.current?.focus(),
      }),
      [],
    );

    return (
      <View style={baseStyles.wrapper}>
        <OtpInput
          ref={inputRef}
          numberOfDigits={length}
          onTextChange={onChange}
          autoFocus={autoFocus}
          onFilled={onFilled}
          disabled={disabled}
          textInputProps={{
            textContentType: 'oneTimeCode',
            importantForAutofill: 'yes',
            autoComplete: Platform.OS === 'android' ? 'sms-otp' : 'one-time-code',
          }}
          theme={{
            pinCodeContainerStyle: baseStyles.input,
            pinCodeTextStyle: baseStyles.text,
            focusStickStyle: baseStyles.stick,
            containerStyle: baseStyles.container,
          }}
        />
      </View>
    );
  },
);

InputOtp.displayName = 'InputOtp';
