import { ColorSchemeName } from 'react-native';

import { brandPalette, negativePalette } from '../../palette';

export const selectBorder = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    primary: isLight ? brandPalette.purple_8 : brandPalette.purple_8,
    secondary: isLight ? brandPalette.purple_4 : brandPalette.purple_4a,

    destructive: isLight ? negativePalette.red_8 : negativePalette.red_8,
    destructive_secondary: isLight ? negativePalette.red_4 : negativePalette.red_4a,
  };
};
