import React from 'react';

import TiynLogo from './logotype.svg';

interface IProps {
  size?: 'md' | 'sm';
}

export const TiynWhite: React.FC<IProps> = ({ size = 'md' }) => {
  switch (size) {
    case 'md':
      return <TiynLogo width={86} height={32} />;
    case 'sm':
      return <TiynLogo width={54} height={20} />;
  }
};
