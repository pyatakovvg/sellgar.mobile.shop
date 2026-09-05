import React from 'react';
import { Animated, ViewStyle } from 'react-native';

export type TAnimationScaleRef = {
  handlerScaleOut: () => void;
  handlerScaleIn: () => void;
};

interface IProps {
  ref: React.RefObject<TAnimationScaleRef | null>;
  style?: ViewStyle;
}

export const Scale: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlerScaleIn = React.useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.8,
      useNativeDriver: true,
      friction: 4,
    }).start();
  }, []);

  const handlerScaleOut = React.useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
    }).start();
  }, []);

  React.useEffect(() => {
    return scale.stopAnimation();
  }, []);

  React.useImperativeHandle(props.ref, () => ({
    handlerScaleOut,
    handlerScaleIn,
  }));

  return React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const cloneElement = child as React.ReactElement<any, any>;
      return (
        <Animated.View style={{ transform: [{ scale }] }}>
          {React.cloneElement(cloneElement, {
            style: [props.style, cloneElement.props.style],
          })}
        </Animated.View>
      );
    }
    return child;
  });
};
