import React from 'react';
import { StyleSheet, View } from 'react-native';

import { scales, shadows, type TTheme, useTheme } from '@library/kit';
import { type ShellContextInterface, useSafeAreaInsets } from '@sellgar/app/native';

export const ShellView: React.FC<ShellContextInterface> = (props) => {
  const { bottom } = useSafeAreaInsets();
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View pointerEvents="box-none" style={[styles.wrapper]}>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
};

const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.surface.default,
      borderRadius: theme.numbers.radius.xxl,
      flexShrink: 1,
      overflow: 'hidden',
    },
    wrapper: {
      flex: 0,
      flexShrink: 1,
      maxHeight: '100%',
      padding: scales[24],
      ...shadows().xs,
    },
  });
