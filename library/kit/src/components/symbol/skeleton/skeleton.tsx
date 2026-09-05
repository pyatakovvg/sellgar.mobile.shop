import React, { useEffect } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { createStyles } from './default.styles.ts';
import { useTheme } from '../../../theme';

const { width: screenWidth } = Dimensions.get('window');

export const Skeleton = ({ borderRadius = 4 }) => {
  const { theme } = useTheme();
  const shimmerAnim = new Animated.Value(0);

  const styles = createStyles(theme);

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    );

    shimmerAnimation.start();

    return () => shimmerAnimation.stop();
  }, []);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  return (
    <View style={[styles.container, { width: '100%', height: '100%', borderRadius }]}>
      <View style={[styles.skeleton, { borderRadius }]} />

      <Animated.View style={[styles.shimmer, { transform: [{ translateX }] }]}>
        <LinearGradient
          colors={['transparent', theme.colors.background.badge.white_disabled, 'transparent']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
};
