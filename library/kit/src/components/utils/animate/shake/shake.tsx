import React from 'react';
import { Animated, Easing, ViewStyle, Vibration } from 'react-native';

interface IProps {
  style?: ViewStyle;
  ref?: React.RefObject<{
    handleShake: () => void;
  }>;
}

export const Shake: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const translateX = React.useRef(new Animated.Value(0)).current;
  const shakeConfig = {
    duration: 50,
    easing: Easing.linear,
    useNativeDriver: true,
  };

  const handleShake = React.useCallback(() => {
    translateX.setValue(0);
    Vibration.vibrate([100, 50, 100]);
    Animated.sequence([
      Animated.timing(translateX, { ...shakeConfig, toValue: 6 }),
      Animated.timing(translateX, { ...shakeConfig, toValue: -6 }),
      Animated.timing(translateX, { ...shakeConfig, toValue: 4 }),
      Animated.timing(translateX, { ...shakeConfig, toValue: -4 }),
      Animated.timing(translateX, { ...shakeConfig, toValue: 2 }),

      Animated.spring(translateX, {
        toValue: 0,
        friction: 5,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  React.useEffect(() => {
    return () => translateX.stopAnimation();
  }, []);

  React.useImperativeHandle(props.ref, () => ({
    handleShake,
  }));

  return React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const cloneElement = child as React.ReactElement<any, any>;
      return (
        <Animated.View style={{ transform: [{ translateX }] }}>
          {React.cloneElement(cloneElement, {
            style: [props.style, cloneElement.props.style],
          })}
        </Animated.View>
      );
    }
    return child;
  });
};
