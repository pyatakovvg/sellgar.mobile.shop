import React from 'react';
import { DimensionValue, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';

import { useTheme } from '../../../theme';

import { createStyles } from './default.styles.ts';

interface ProgressBarProps {
  duration: number;
  onEnd?: () => void;
  isActive?: boolean;
  isCompleted?: boolean;
  isPaused?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  duration,
  onEnd,
  isActive = false,
  isCompleted = false,
  isPaused = false,
}) => {
  const progress = useSharedValue(0);
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);

  const startTimeRef = React.useRef<number | null>(null);
  const elapsedTimeRef = React.useRef<number>(0);
  const animationRef = React.useRef<number | null>(null);

  const startAnimation = React.useCallback(() => {
    cancelAnimation(progress);

    progress.value = elapsedTimeRef.current / duration;

    const remainingTime = duration - elapsedTimeRef.current;

    startTimeRef.current = Date.now();

    progress.value = withTiming(1, {
      duration: remainingTime,
      easing: Easing.linear,
    });

    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    animationRef.current = setTimeout(() => {
      if (!isPaused && isActive && onEnd) {
        onEnd();
      }
    }, remainingTime);
  }, [progress, duration, onEnd, isActive, isPaused]);

  const pauseAnimation = React.useCallback(() => {
    cancelAnimation(progress);

    if (startTimeRef.current) {
      elapsedTimeRef.current += Date.now() - startTimeRef.current;
      startTimeRef.current = null;
    }

    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  }, [progress]);

  const resetAnimation = React.useCallback(() => {
    cancelAnimation(progress);
    progress.value = 0;
    elapsedTimeRef.current = 0;
    startTimeRef.current = null;

    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  }, [progress]);

  React.useEffect(() => {
    if (isCompleted) {
      resetAnimation();
      progress.value = 1;
    } else if (isActive && !isPaused) {
      startAnimation();
    } else if (isActive && isPaused) {
      pauseAnimation();
    } else {
      resetAnimation();
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isActive, isCompleted, isPaused, startAnimation, pauseAnimation, resetAnimation, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const width = `${progress.value * 100}%` as DimensionValue;

    const backgroundColor = 'rgba(255,255,255,1)';

    return {
      width,
      backgroundColor,
    };
  });

  return (
    <View style={baseStyles.container}>
      <Animated.View style={[baseStyles.bar, animatedStyle]} />
    </View>
  );
};
