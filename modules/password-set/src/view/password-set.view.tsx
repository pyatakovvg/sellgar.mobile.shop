import { AuthHeader } from '@library/design';
import { Viewport } from '@sellgar/app/native';

import React from 'react';
import { View } from 'react-native';

import { createStyles } from './default.styles.ts';
import { PasswordSetForm } from './form/password-set.form.tsx';

export const PasswordSetView: React.FC = () => {
  const styles = React.useMemo(() => createStyles(), []);

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.wrapper}>
          <AuthHeader
            description="Создайте надёжный пароль, чтобы защитить свой аккаунт"
            icon="lock"
            title="Задайте пароль"
          />
          <View style={styles.content}>
            <PasswordSetForm />
          </View>
        </View>
      </Viewport.Slot>
    </Viewport>
  );
};
