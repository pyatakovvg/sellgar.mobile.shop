import { useLoaderData } from '@sellgar/app/native';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RuntimeProbeControllerInterface } from '../classes/controller/runtime-probe-controller.interface.ts';

export const WidgetView: React.FC = () => {
  const runtime = useLoaderData(RuntimeProbeControllerInterface);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>Widget runtime #{runtime.instance}, loader #{runtime.loads}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: { color: '#f7f7fb', fontSize: 14, fontWeight: '700' },
  root: { backgroundColor: '#355149', borderRadius: 10, padding: 12 },
});
