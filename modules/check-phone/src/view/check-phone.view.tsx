import { AuthHeader } from '@library/design';
import { Viewport } from '@sellgar/app/native';

import React from 'react';
import { View } from 'react-native';

import { CheckPhoneForm } from './form/check-phone.form.tsx';
import { createStyles } from './default.styles.ts';

export const CheckPhoneView: React.FC = () => {
  const styles = React.useMemo(() => createStyles(), []);

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.wrapper}>
          <AuthHeader
            description="Укажите номер телефона, чтобы войти в аккаунт или создать новый"
            icon="profile"
            title="Вход или регистрация"
          />
          <View style={styles.content}>
            <CheckPhoneForm />
          </View>
        </View>
      </Viewport.Slot>
    </Viewport>
  );
};
