import React from 'react';

import { Provider } from './auth-layout.context.ts';

interface IProps {
  setBackPress: (handler: (() => void) | null) => void;
}

export const AuthLayoutProvider: React.FC<React.PropsWithChildren<IProps>> = ({ children, ...props }) => {
  return <Provider value={props}>{children}</Provider>;
};
