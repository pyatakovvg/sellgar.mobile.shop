import { Input, Field, Label } from '@library/kit';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormProvider, useForm, Controller } from 'react-hook-form';

interface SignInFormValues {
  login: string;
}

export const SignInForm = () => {
  const methods = useForm<SignInFormValues>({
    defaultValues: {
      login: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <View style={s.container}>
        <View>
          <Controller
            control={methods.control}
            name="login"
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <Field>
                <Field.Label>
                  <Label label={'Логин'} />
                </Field.Label>
                <Field.Content>
                  <Input
                    ref={ref}
                    autoFocus={true}
                    enterKeyHint={'done'}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                </Field.Content>
              </Field>
            )}
          />
        </View>
      </View>
    </FormProvider>
  );
};

const s = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: '#ffffff',
    fontSize: 20,
  },
  text: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#ffffff',
    color: '#ffffff',
    fontSize: 20,
  },
});
