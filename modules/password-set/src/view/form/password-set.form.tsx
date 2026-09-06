import { yupResolver } from '@hookform/resolvers/yup';
import { Caption, Field, Icon, Input, useTheme } from '@library/kit';
import { useSubmit } from '@sellgar/app/native';

import React from 'react';
import { View } from 'react-native';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { PasswordSetControllerInterface } from '../../classes/controller/password-set-controller.interface.ts';
import { PasswordChecks } from '../password-checks/password-checks.tsx';
import { createStyles } from './default.styles.ts';
import { passwordSetSchema, type PasswordSetFormValues } from './password-set.schema.ts';

export const PasswordSetForm: React.FC = () => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const submit = useSubmit(PasswordSetControllerInterface);
  const [securePassword, setSecurePassword] = React.useState(true);
  const [secureConfirmation, setSecureConfirmation] = React.useState(true);
  const methods = useForm<PasswordSetFormValues>({
    defaultValues: { confirmPassword: '', password: '' },
    resolver: yupResolver(passwordSetSchema),
  });
  const onSubmit = methods.handleSubmit(({ password }) => submit({ password }));

  return (
    <FormProvider {...methods}>
      <View>
        <Controller
          control={methods.control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <Field>
              <Field.Content>
                <Input
                  autoComplete="new-password"
                  autoFocus
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  onSubmitEditing={() => methods.setFocus('confirmPassword')}
                  onTailIconPress={() => setSecurePassword((value) => !value)}
                  placeholder="Введите пароль"
                  ref={field.ref}
                  returnKeyType="next"
                  secureTextEntry={securePassword}
                  tailIcon={<Icon icon={securePassword ? 'eye-off-line' : 'eye-line'} />}
                  target={error ? 'destructive' : undefined}
                  value={field.value}
                />
              </Field.Content>
              {error ? (
                <Field.Caption>
                  <Caption caption={error.message ?? 'Неверный пароль'} state="destructive" />
                </Field.Caption>
              ) : null}
            </Field>
          )}
        />
        <View style={styles.field}>
          <Controller
            control={methods.control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <Field>
                <Field.Content>
                  <Input
                    autoComplete="new-password"
                    button={
                      <Input.Button
                        inProcess={submit.inProcess}
                        onPress={() => void onSubmit()}
                        tailIcon={<Icon icon="arrow-right-line" style={styles.tailIcon} />}
                      />
                    }
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    onSubmitEditing={() => void onSubmit()}
                    onTailIconPress={() => setSecureConfirmation((value) => !value)}
                    placeholder="Повторите пароль"
                    ref={field.ref}
                    returnKeyType="done"
                    secureTextEntry={secureConfirmation}
                    tailIcon={<Icon icon={secureConfirmation ? 'eye-off-line' : 'eye-line'} />}
                    target={error ? 'destructive' : undefined}
                    value={field.value}
                  />
                </Field.Content>
                {error ? (
                  <Field.Caption>
                    <Caption caption={error.message ?? 'Пароли не совпадают'} state="destructive" />
                  </Field.Caption>
                ) : null}
              </Field>
            )}
          />
        </View>
        <PasswordChecks />
      </View>
    </FormProvider>
  );
};
