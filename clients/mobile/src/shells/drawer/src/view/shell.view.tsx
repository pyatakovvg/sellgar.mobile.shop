import React from 'react';
import { StyleSheet, View } from 'react-native';

import { type ShellContextInterface, useSafeAreaInsets } from '@sellgar/app/native';

export const ShellView: React.FC<ShellContextInterface> = (props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.surface, { marginTop: top + 24 }]}>
      <View style={styles.header}>
        <View style={styles.grabber} />
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  grabber: {
    backgroundColor: '#666b7a',
    borderRadius: 2,
    height: 4,
    width: 40,
    marginHorizontal: 'auto',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 24,
    paddingHorizontal: 12,
  },
  surface: {
    backgroundColor: '#171a23',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 12,
    flexShrink: 1,
    maxHeight: '100%',
    overflow: 'hidden',
  },
});
