import { yupResolver } from '@hookform/resolvers/yup';
import { Caption, Field, Icon, Input, InputMask, Typography, useTheme } from '@library/kit';
import { useSubmit } from '@sellgar/app/native';

import React from 'react';
import { Linking, Text, View } from 'react-native';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { CheckPhoneControllerInterface } from '../../classes/controller/check-phone-controller.interface.ts';
import { checkPhoneSchema, type CheckPhoneFormValues } from './check-phone.schema.ts';
import { createStyles } from './default.styles.ts';

const normalizePhone = (raw: string): string => {
  const cleaned = raw.replace(/\D/g, '');
  const match = cleaned.match(/^7[78](\d{10})$/);

  return match ? `7${match[1]}` : cleaned;
};

export const CheckPhoneForm: React.FC = () => {
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const submit = useSubmit(CheckPhoneControllerInterface);
  const methods = useForm<CheckPhoneFormValues>({
    defaultValues: { phone: '7' },
    resolver: yupResolver(checkPhoneSchema),
  });

  const onSubmit = methods.handleSubmit(submit);

  return (
    <FormProvider {...methods}>
      <View style={styles.wrapper}>
        <Controller
          control={methods.control}
          name="phone"
          render={({ field, fieldState: { error } }) => (
            <Field>
              <Field.Content>
                <InputMask
                  autoComplete="tel"
                  autoFocus
                  button={
                    <Input.Button
                      disabled={!!error || field.value.length !== 11}
                      inProcess={submit.inProcess}
                      onPress={() => void onSubmit()}
                      tailIcon={<Icon icon="arrow-right-line" style={styles.tailIcon} />}
                    />
                  }
                  keyboardType="phone-pad"
                  leadIcon={<Icon icon="phone-line" />}
                  mask="+7 (999) 999-99-99"
                  onBlur={field.onBlur}
                  onChangeText={(_, value) => field.onChange(normalizePhone(value))}
                  onSubmitEditing={() => void onSubmit()}
                  placeholder="+7"
                  returnKeyType="done"
                  target={error ? 'destructive' : undefined}
                  value={field.value}
                />
              </Field.Content>
              {error ? (
                <Field.Caption>
                  <Caption
                    caption={error.message ?? 'Неверный формат телефона'}
                    leadIcon={<Icon icon="information-line" />}
                    state="destructive"
                  />
                </Field.Caption>
              ) : null}
              <Typography size="caption-s" weight="regular">
                <Text style={styles.privacy}>
                  Продолжая, вы принимаете{' '}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      void Linking.openURL(
                        'https://tiyn.io/s3/global-assets/wallet/common/docs/%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D0%A1%D0%AD%D0%94_%D0%91%D0%B5%D1%82%D0%B0%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%B5%D1%80.pdf',
                      )
                    }
                  >
                    оферту
                  </Text>
                  <Text> и </Text>
                  <Text style={styles.link} onPress={() => void Linking.openURL('https://tiyn.io/privacy-policy')}>
                    политику конфиденциальности
                  </Text>
                </Text>
              </Typography>
            </Field>
          )}
        />
      </View>
    </FormProvider>
  );
};
