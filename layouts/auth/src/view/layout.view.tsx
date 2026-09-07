import { type LayoutViewProps } from '@sellgar/app/native';

import React from 'react';
import { View } from 'react-native';

import { createStyles } from '../default.styles.ts';
import { Header } from '../header';

export const LayoutView: React.FC<LayoutViewProps> = (props) => {
  const styles = React.useMemo(() => createStyles(), []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
};
