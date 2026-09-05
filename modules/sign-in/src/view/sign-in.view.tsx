import { Viewport } from '@sellgar/app/native';

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SignInForm } from './form';

export const SignInView = () => {
  return (
    <Viewport>
      <Viewport.Slot grow={1}>
        <View style={s.container}>
          <SignInForm />
        </View>
      </Viewport.Slot>
    </Viewport>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 48,
  },
});
