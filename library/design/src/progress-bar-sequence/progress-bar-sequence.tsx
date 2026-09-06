import { ProgressBar } from '@library/kit';

import React from 'react';
import { View } from 'react-native';

import { createStyles } from './default.styles.ts';

export interface ProgressBarSequenceRef {
  next: () => void;
  previous: () => void;
  pause: () => void;
  resume: () => void;
  currentIndex: number;
  isPaused: boolean;
}

interface ProgressBarSequenceProps {
  count: number;
  duration: number;
  onSequenceEnd?: () => void;
  onIndexChange?: (index: number) => void;
  onPauseStateChange?: (isPaused: boolean) => void;
}

export const ProgressBarSequence = React.forwardRef<ProgressBarSequenceRef, ProgressBarSequenceProps>(
  ({ count, duration, onSequenceEnd, onIndexChange, onPauseStateChange }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [completedBars, setCompletedBars] = React.useState<number[]>([]);
    const [isPaused, setIsPaused] = React.useState(false);
    const baseStyles = createStyles();

    React.useEffect(() => {
      onPauseStateChange?.(isPaused);
    }, [isPaused, onPauseStateChange]);

    const handleProgressEnd = React.useCallback(() => {
      if (isPaused) return;

      setCompletedBars((prev) => [...prev, activeIndex]);

      if (activeIndex < count - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        onSequenceEnd?.();
      }
    }, [activeIndex, count, onSequenceEnd, isPaused]);

    const next = React.useCallback(() => {
      if (isPaused) return;

      setCompletedBars((prev) => [...prev, activeIndex]);

      if (activeIndex < count - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        onSequenceEnd?.();
      }
    }, [activeIndex, count, onSequenceEnd, isPaused]);

    const previous = React.useCallback(() => {
      if (activeIndex > 0) {
        setCompletedBars((prev) => prev.filter((i) => i !== activeIndex - 1));
        setActiveIndex((prev) => prev - 1);
      } else {
        setCompletedBars((prev) => prev.filter((i) => i !== 0));
        setActiveIndex(0);
      }
    }, [activeIndex]);

    const pause = React.useCallback(() => {
      setIsPaused(true);
    }, []);

    const resume = React.useCallback(() => {
      setIsPaused(false);
    }, []);

    React.useImperativeHandle(ref, () => ({
      next,
      previous,
      pause,
      resume,
      currentIndex: activeIndex,
      isPaused,
    }));

    React.useEffect(() => {
      onIndexChange?.(activeIndex);
    }, [activeIndex]);

    return (
      <View style={baseStyles.wrapper}>
        {Array.from({ length: count }).map((_, i) => (
          <View key={i} style={baseStyles.item}>
            <ProgressBar
              duration={duration}
              isActive={i === activeIndex}
              isCompleted={completedBars.includes(i)}
              isPaused={isPaused}
              onEnd={i === activeIndex ? handleProgressEnd : undefined}
            />
          </View>
        ))}
      </View>
    );
  },
);
