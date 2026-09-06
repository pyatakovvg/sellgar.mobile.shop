import { OtpAttemptsExceededError, OtpExpiredError, type OtpEntity } from '@library/domain';
import { useSubmit, useWidgetProps } from '@sellgar/app/native';

import React from 'react';
import { View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';

import type { OtpWidgetProps } from '../otp-widget.props.ts';
import { OtpConfirmControllerInterface } from '../classes/controller/confirm/otp-confirm-controller.interface.ts';
import { OtpResendControllerInterface } from '../classes/controller/resend/otp-resend-controller.interface.ts';
import { OtpForm } from './form/otp.form.tsx';
import { OtpHeader } from './header/otp-header.tsx';
import { OtpLoader } from './loader/otp-loader.tsx';
import { OtpTimer } from './timer/otp-timer.tsx';
import { createStyles } from './default.styles.ts';

export interface OtpFormValues {
  readonly code: string;
}

export const OtpView: React.FC = () => {
  const props = useWidgetProps<OtpWidgetProps>();
  const confirm = useSubmit(OtpConfirmControllerInterface);
  const resend = useSubmit(OtpResendControllerInterface);
  const methods = useForm<OtpFormValues>({ defaultValues: { code: '' } });
  const styles = React.useMemo(() => createStyles(), []);
  const [data, setData] = React.useState(props.data);
  const [token, setToken] = React.useState(props.token);
  const [error, setError] = React.useState<unknown>(null);
  const terminalError = error instanceof OtpAttemptsExceededError || error instanceof OtpExpiredError;

  React.useEffect(() => {
    setError(confirm.error ?? resend.error ?? null);
  }, [confirm.error, resend.error]);

  React.useEffect(() => {
    setData(props.data);
    setToken(props.token);
    setError(null);
  }, [props.data, props.token]);

  const handleFilled = React.useCallback(
    async (code: string): Promise<void> => {
      if (confirm.inProcess || code.length !== 6) {
        return;
      }

      const result = await confirm({ code, token });

      if (result) {
        setData(result);
        setToken(result.verificationUuid ?? token);
        setError(null);
      }
    },
    [confirm, token],
  );

  const handleResend = React.useCallback(async (): Promise<void> => {
    const result = await resend({ token });

    if (result) {
      setData(result);
      setToken(result.verificationUuid ?? token);
      setError(null);
    }
  }, [resend, token]);

  return (
    <FormProvider {...methods}>
      <View style={styles.wrapper}>
        <OtpHeader phone={props.phone} />
        <View style={styles.form}>
          <OtpForm
            disabled={terminalError || confirm.inProcess}
            error={error}
            onChange={() => setError(null)}
            onFilled={handleFilled}
          />
        </View>
        <View style={styles.timer}>
          <OtpTimer data={data} inProcess={resend.inProcess} onResend={handleResend} />
        </View>
        <View style={styles.loader}>
          <OtpLoader inProcess={confirm.inProcess} />
        </View>
      </View>
    </FormProvider>
  );
};
