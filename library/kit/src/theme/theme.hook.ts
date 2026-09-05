import React from 'react';

import { context } from './theme.context.ts';

export function useTheme() {
  const { theme, colorScheme, toggleColorScheme } = React.useContext(context);

  return { theme, colorScheme, toggleColorScheme };
}
