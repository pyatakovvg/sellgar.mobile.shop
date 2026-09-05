import React from 'react';
import { Platform, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

import { useTheme } from '../../../theme';

import { createStyles } from './default.styles.ts';

interface IProps {
  onChange: (value: string) => void;
  length?: number;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export const InputOtp: React.FC<IProps> = ({ onChange, length = 6, disabled = false, error, autoFocus = false }) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme, !!error), [theme, error]);

  return (
    <View style={baseStyles.wrapper}>
      <OtpInput
        numberOfDigits={length}
        onTextChange={(value) => onChange(value)}
        autoFocus={autoFocus}
        onFilled={onChange}
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
};
