import { useTheme, LinearGradientWrapper, Image } from '@library/kit';

import React from 'react';
import { View } from 'react-native';

import { createStyles } from './default.styles.ts';

export const SattyZhuldysImage = () => {
  const { theme } = useTheme();

  const baseStyles = React.useMemo(() => createStyles(theme), []);

  return (
    <View style={baseStyles.wrapper}>
      <LinearGradientWrapper colors={['#2684FF', '#1847FA']} style={baseStyles.content}>
        <Image source={require('./szh.image.png')} style={baseStyles.image} />
      </LinearGradientWrapper>
    </View>
  );
};
