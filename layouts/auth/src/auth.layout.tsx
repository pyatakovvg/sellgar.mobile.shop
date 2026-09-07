import { useTheme } from '@library/kit';

import React from 'react';
import { View } from 'react-native';

import { AuthLayoutProvider } from './auth-layout.provider.tsx';
import { Header } from './header';

import { createStyles } from './default.styles.ts';

interface IProps {
  title?: string;
}

export const AuthLayout: React.FC<React.PropsWithChildren<IProps>> = React.memo((props) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  const [onBackPress, setOnBackPress] = React.useState<(() => void) | null>(null);

  return (
    <AuthLayoutProvider setBackPress={setOnBackPress}>
      <View style={baseStyles.wrapper}>
        <View style={baseStyles.header}>
          <Header withBackBtn={!!onBackPress} onPressBack={onBackPress || undefined} />
        </View>
        <View style={baseStyles.container}>{props.children}</View>
      </View>
    </AuthLayoutProvider>
  );
});
