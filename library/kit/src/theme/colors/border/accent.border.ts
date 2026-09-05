import { ColorSchemeName } from 'react-native';

import { positivePalette, brandPalette, warningPalette, negativePalette, informativePalette } from '../../palette';

export const accentBorder = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    blue: isLight ? informativePalette.blue_5 : informativePalette.blue_5a,
    blue_accent: isLight ? informativePalette.blue_8 : informativePalette.blue_8,

    green: isLight ? positivePalette.green_5 : positivePalette.green_5a,
    green_accent: isLight ? positivePalette.green_8 : positivePalette.green_8,

    orange: isLight ? warningPalette.orange_5 : warningPalette.orange_5a,
    orange_accent: isLight ? warningPalette.orange_8 : warningPalette.orange_8,

    red: isLight ? negativePalette.red_5 : negativePalette.red_5a,
    red_accent: isLight ? negativePalette.red_8 : negativePalette.red_8,

    purple: isLight ? brandPalette.purple_5 : brandPalette.purple_5a,
    purple_accent: isLight ? positivePalette.green_8 : positivePalette.green_8,
  };
};
