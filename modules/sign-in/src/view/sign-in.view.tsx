import { AuthHeader } from '@library/design';
import { PasswordResetOtpRoute } from '@library/route-tokens';
import { scales, Typography, type TTheme, useTheme } from '@library/kit';
import { NavLink, Viewport, useLoaderData } from '@sellgar/app/native';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { SignInControllerInterface } from '../classes/controller/sign-in-controller.interface.ts';
import { SignInForm } from './form/sign-in.form.tsx';

export const SignInView: React.FC = () => {
  const { theme } = useTheme();
  const data = useLoaderData(SignInControllerInterface);
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
          <NavLink
            navigation={(navigate) =>
              navigate.to(PasswordResetOtpRoute, {
                params: { requestUuid: data.passwordResetRequestUuid },
                state: { phone: data.phone },
              })
            }
          >
            {({ isPending, link }) => (
              <TouchableOpacity {...link} disabled={isPending} style={styles.forgotPassword}>
                <Typography size="caption-m" weight="regular">
                  <Text style={styles.forgotPasswordText}>Я забыл пароль</Text>
                </Typography>
              </TouchableOpacity>
            )}
          </NavLink>
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
      alignSelf: 'flex-start',
      marginTop: scales[10],
    },
    forgotPasswordText: {
      color: theme.colors.text.accent.blue_accent,
    },
    wrapper: {
      flex: 1,
      marginTop: scales[68],
      paddingHorizontal: scales[24],
    },
  });
