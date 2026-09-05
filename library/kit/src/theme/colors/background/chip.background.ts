import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette } from '../../palette';

export const chipBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    primary: isLight ? basePalette.white : basePalette.dark_1,
    primary_hover: isLight ? neutralPalette.gray_1 : neutralPalette.gray_13,
    primary_active: isLight ? basePalette.white : basePalette.dark_1,
    primary_disabled: isLight ? basePalette.white : basePalette.dark_1,

    secondary: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,
    secondary_hover: isLight ? neutralPalette.gray_2a : neutralPalette.white_2,
    secondary_active: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,
    secondary_disabled: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,
  };
};
