import React from 'react';
import { Animated, Easing, ViewStyle } from 'react-native';

export interface IProps {
  style?: ViewStyle;
}

export const Spin: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const rotation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    );
    spinAnimation.start();

    return () => {
      spinAnimation.stop();
    };
  }, [rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const cloneElement = child as React.ReactElement<any, any>;

      return (
        <Animated.View style={[{ display: 'flex', flexDirection: 'row', flex: 0 }, { transform: [{ rotate: spin }] }]}>
          {React.cloneElement(cloneElement, {
            style: [props.style, cloneElement.props.style],
          })}
        </Animated.View>
      );
    }
    return child;
  });
};
