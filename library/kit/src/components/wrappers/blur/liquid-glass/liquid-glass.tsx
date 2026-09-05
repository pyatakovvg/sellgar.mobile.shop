import React from 'react';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';

import { useTheme } from '../../../../theme';

export const LiquidGlass: React.FC<React.PropsWithChildren> = (props) => {
  const { theme } = useTheme();
  return (
    <LiquidGlassView
      glassType="regular"
      glassTintColor={theme.colors.background.surface.neutral_subtle}
      reducedTransparencyFallbackColor={theme.colors.background.surface.neutral_subtle}
      glassOpacity={0.4}
      isInteractive={true}
      ignoreSafeArea={false}
      style={{
        flex: 1,
      }}
    >
      {props.children}
    </LiquidGlassView>
  );
};
