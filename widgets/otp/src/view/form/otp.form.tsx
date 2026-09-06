import { OtpAttemptsExceededError, OtpExpiredError, OtpInvalidCodeError } from '@library/domain';
import { Caption, Field, InputOtp, type InputOtpHandle } from '@library/kit';

import React from 'react';
import { View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';

import type { OtpFormValues } from '../otp.view.tsx';
import { createStyles } from './default.styles.ts';

interface OtpFormProps {
  readonly disabled: boolean;
  readonly error: unknown;
  readonly onChange: () => void;
  readonly onFilled: (code: string) => Promise<void>;
}

export const OtpForm: React.FC<OtpFormProps> = ({ disabled, error, onChange, onFilled }) => {
  const { control, setValue } = useFormContext<OtpFormValues>();
  const input = React.useRef<InputOtpHandle>(null);
  const styles = React.useMemo(() => createStyles(), []);
  const message = getOtpErrorMessage(error);

  React.useEffect(() => {
    if (error instanceof OtpAttemptsExceededError || error instanceof OtpExpiredError) {
      input.current?.clear();
      setValue('code', '');
    }
  }, [error, setValue]);

  return (
    <Controller
      control={control}
      name="code"
      render={({ field }) => (
        <Field>
          <Field.Content>
            <InputOtp
              ref={input}
              autoFocus
              disabled={disabled}
              error={message !== null}
              onChange={(value) => {
                field.onChange(value);
                onChange();
              }}
              onFilled={(code) => void onFilled(code)}
            />
          </Field.Content>
          {message ? (
            <View style={styles.caption}>
              <Field.Caption>
                <Caption caption={message} state="destructive" />
              </Field.Caption>
            </View>
          ) : null}
        </Field>
      )}
    />
  );
};

const getOtpErrorMessage = (error: unknown): string | null => {
  if (
    error instanceof OtpAttemptsExceededError ||
    error instanceof OtpExpiredError ||
    error instanceof OtpInvalidCodeError
  ) {
    return error.message;
  }

  return null;
};
