import { ColorSchemeName } from 'react-native';

import { positivePalette, warningPalette, negativePalette, informativePalette } from '../../palette';

export const statusIcon = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    destructive: isLight ? negativePalette.red_8 : negativePalette.red_8,
    destructive_secondary: isLight ? negativePalette.red_9a : negativePalette.red_9a,
    destructive_tertiary: isLight ? negativePalette.red_5a : negativePalette.red_6a,

    success: isLight ? positivePalette.green_8 : positivePalette.green_8,
    success_secondary: isLight ? positivePalette.green_9a : positivePalette.green_8a,
    success_tertiary: isLight ? positivePalette.green_5a : positivePalette.green_5a,

    warning: isLight ? warningPalette.orange_8 : warningPalette.orange_8,
    warning_secondary: isLight ? warningPalette.orange_8a : warningPalette.orange_8a,
    warning_tertiary: isLight ? warningPalette.orange_5a : warningPalette.orange_5a,

    info: isLight ? informativePalette.blue_8 : informativePalette.blue_8,
    info_secondary: isLight ? informativePalette.blue_8a : informativePalette.blue_8a,
    info_tertiary: isLight ? informativePalette.blue_5a : informativePalette.blue_5a,
  };
};
