import { scales } from '@library/kit';
import { Viewport, WidgetHost, useLoaderData, useSubmit } from '@sellgar/app/native';
import { OtpWidget } from '@widget/otp';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthOtpControllerInterface } from '../classes/controller/auth-otp-controller.interface.ts';

export const AuthOtpView: React.FC = () => {
  const data = useLoaderData(AuthOtpControllerInterface);
  const complete = useSubmit(AuthOtpControllerInterface);

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.wrapper}>
          <WidgetHost
            token={OtpWidget}
            props={{
              data: data.verification,
              onSuccess: () => complete().then(() => undefined),
              phone: data.phone,
              token: data.token,
            }}
          />
        </View>
      </Viewport.Slot>
    </Viewport>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: scales[68],
    paddingHorizontal: scales[24],
  },
});
