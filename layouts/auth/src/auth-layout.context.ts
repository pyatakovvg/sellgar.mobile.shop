import React from 'react';

interface IContext {
  setBackPress: (handler: (() => void) | null) => void;
}

export const context = React.createContext({} as IContext);
export const Provider = context.Provider;
