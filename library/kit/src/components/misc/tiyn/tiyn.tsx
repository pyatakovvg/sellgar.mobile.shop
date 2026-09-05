import React from 'react';

import { useTheme } from '../../../theme';

import TiynDark from './logotype-dark.svg';
import TiynLight from './logotype-light.svg';

interface IProps {
  size?: 'lg' | 'md' | 'sm';
}

export const Tiyn: React.FC<IProps> = ({ size = 'md' }) => {
  const { colorScheme } = useTheme();

  if (colorScheme === 'light') {
    switch (size) {
      case 'md':
        return <TiynDark width={86} height={32} />;
      case 'sm':
        return <TiynDark width={54} height={20} />;
    }
  } else {
    switch (size) {
      case 'md':
        return <TiynLight width={86} height={32} />;
      case 'sm':
        return <TiynLight width={54} height={20} />;
    }
  }
};
