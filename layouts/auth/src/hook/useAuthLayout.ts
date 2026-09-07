import React from 'react';

import { context } from '../auth-layout.context.ts';

export const useAuthLayout = () => {
  return React.useContext(context);
};
