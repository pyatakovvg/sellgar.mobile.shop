import { AuthHeader } from '@library/design';
import { scales, Typography, type TTheme, useTheme } from '@library/kit';
import { Viewport, useLoaderData, useSubmit } from '@sellgar/app/native';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PasswordResetControllerInterface } from '../classes/controller/password-reset/password-reset-controller.interface.ts';
import { SignInControllerInterface } from '../classes/controller/sign-in-controller.interface.ts';
import { SignInForm } from './form/sign-in.form.tsx';

export const SignInView: React.FC = () => {
  const { theme } = useTheme();
  const data = useLoaderData(SignInControllerInterface);
  const resetPassword = useSubmit(PasswordResetControllerInterface);
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.wrapper}>
          <AuthHeader
            description={'Введите ваш пароль, который\nвы указывали при регистрации'}
            icon="lock"
            title="Введите пароль"
          />
          <Typography size="caption-m" weight="regular">
            <Text disabled={resetPassword.inProcess} onPress={() => void resetPassword()} style={styles.forgotPassword}>
              Я забыл пароль
            </Text>
          </Typography>
          <View style={styles.content}>
            <SignInForm phone={data.phone} />
          </View>
        </View>
      </Viewport.Slot>
    </Viewport>
  );
};

const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    content: {
      marginTop: scales[96],
    },
    forgotPassword: {
      color: theme.colors.text.accent.blue_accent,
      marginTop: scales[10],
    },
    wrapper: {
      flex: 1,
      marginTop: scales[68],
      paddingHorizontal: scales[24],
    },
  });
