import { useTheme } from '@library/kit';
import { ApplicationEventBusInterface } from '@sellgar/app';
import { type LayoutViewProps, useDependency } from '@sellgar/app/native';

import React from 'react';
import { Image, type ImageSourcePropType, type StyleProp, View, type ViewStyle } from 'react-native';

import { BackgroundImageChangedEvent } from '../events/background-image-changed.event.ts';
import { StylesChangedEvent } from '../events/styles-changed.event.ts';
import { createStyles } from './default.styles.ts';

export const LayoutView: React.FC<LayoutViewProps> = (props) => {
  const { theme } = useTheme();
  const events = useDependency(ApplicationEventBusInterface);
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [backgroundImage, setBackgroundImage] = React.useState<ImageSourcePropType>();
  const [wrapperStyle, setWrapperStyle] = React.useState<StyleProp<ViewStyle>>();

  React.useEffect(() => {
    const subscriptions = events
      .createScope()
      .subscribe(StylesChangedEvent, (event) => setWrapperStyle(event.styles))
      .subscribe(BackgroundImageChangedEvent, (event) => setBackgroundImage(event.source));

    return () => subscriptions.dispose();
  }, [events]);

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {backgroundImage !== undefined && <Image source={backgroundImage} resizeMode="cover" style={styles.background} />}
      {props.children}
    </View>
  );
};
