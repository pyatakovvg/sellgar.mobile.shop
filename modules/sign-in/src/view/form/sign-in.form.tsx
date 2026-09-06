import { yupResolver } from '@hookform/resolvers/yup';
import { Caption, Field, Icon, Input, InputMask, useTheme } from '@library/kit';
import { useSubmit } from '@sellgar/app/native';

import React from 'react';
import { View } from 'react-native';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { SignInControllerInterface } from '../../classes/controller/sign-in-controller.interface.ts';
import { InvalidCredentialsError } from '../../classes/error/invalid-credentials.error.ts';
import { createStyles } from './default.styles.ts';
import { signInSchema, type SignInFormValues } from './sign-in.schema.ts';

interface SignInFormProps {
  readonly phone: string;
}

export const SignInForm: React.FC<SignInFormProps> = ({ phone }) => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const submit = useSubmit(SignInControllerInterface);
  const methods = useForm<SignInFormValues>({
    defaultValues: { password: '' },
    resolver: yupResolver(signInSchema),
  });
  const [secure, setSecure] = React.useState(true);

  React.useEffect(() => {
    if (submit.error instanceof InvalidCredentialsError) {
      methods.setError('password', { message: submit.error.message, type: 'server' });
    }
  }, [methods, submit.error]);

  const onSubmit = methods.handleSubmit(submit);

  return (
    <FormProvider {...methods}>
      <View style={styles.wrapper}>
        <Field>
          <Field.Content>
            <InputMask
              autoComplete="tel"
              disabled
              keyboardType="phone-pad"
              leadIcon={<Icon icon="phone-line" />}
              mask="+9 (999) 999-99-99"
              onChangeText={() => undefined}
              value={phone}
            />
          </Field.Content>
        </Field>
        <Controller
          control={methods.control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <Field>
              <Field.Content>
                <Input
                  autoComplete="password"
                  autoFocus
                  button={
                    <Input.Button
                      disabled={!field.value || field.value.length < 6}
                      inProcess={submit.inProcess}
                      onPress={() => void onSubmit()}
                      tailIcon={<Icon icon="arrow-right-line" style={styles.tailIcon} />}
                    />
                  }
                  leadIcon={<Icon icon="lock-password-line" />}
                  onBlur={field.onBlur}
                  onChangeText={(value) => {
                    field.onChange(value);
                    methods.clearErrors('password');
                  }}
                  onSubmitEditing={() => void onSubmit()}
                  onTailIconPress={() => setSecure((value) => !value)}
                  placeholder="Пароль"
                  returnKeyType="done"
                  secureTextEntry={secure}
                  tailIcon={<Icon icon={secure ? 'eye-off-line' : 'eye-line'} />}
                  target={error ? 'destructive' : undefined}
                  value={field.value}
                />
              </Field.Content>
              {error ? (
                <Field.Caption>
                  <Caption
                    caption={error.message ?? 'Неверный пароль'}
                    leadIcon={<Icon icon="information-line" />}
                    state="destructive"
                  />
                </Field.Caption>
              ) : null}
            </Field>
          )}
        />
      </View>
    </FormProvider>
  );
};
