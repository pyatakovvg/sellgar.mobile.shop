import React from 'react';
import BlurView from '@sbaiahmed1/react-native-blur';

import { useTheme } from '../../../../theme';

export const Blur: React.FC<React.PropsWithChildren> = (props) => {
  const { theme, colorScheme } = useTheme();

  return (
    <BlurView
      blurType={colorScheme === 'dark' ? 'dark' : 'light'}
      blurAmount={40}
      overlayColor={`${theme.colors.background.surface.neutral_subtle}66`}
      reducedTransparencyFallbackColor={`${theme.colors.background.surface.neutral_subtle}66`}
      style={{
        flex: 1,
      }}
    >
      {props.children}
    </BlurView>
  );
};
