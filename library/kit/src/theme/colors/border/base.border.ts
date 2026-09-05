import { ColorSchemeName } from 'react-native';

import {
  basePalette,
  neutralPalette,
  positivePalette,
  brandPalette,
  warningPalette,
  negativePalette,
  informativePalette,
} from '../../palette';

export const baseBorder = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    neutral: isLight ? neutralPalette.gray_3 : neutralPalette.white_3,
    neutral_subtle: isLight ? neutralPalette.gray_4 : neutralPalette.white_4,

    info: isLight ? informativePalette.blue_4 : informativePalette.blue_4a,
    success: isLight ? positivePalette.green_4 : positivePalette.green_4a,
    warning: isLight ? warningPalette.orange_4 : warningPalette.orange_4a,
    destructive: isLight ? negativePalette.red_4 : negativePalette.red_4a,
    brand: isLight ? brandPalette.purple_4 : brandPalette.purple_4a,

    divider: isLight ? neutralPalette.gray_2 : neutralPalette.gray_12,

    alpha: isLight ? neutralPalette.gray_2a : neutralPalette.white_2,
    alpha_white: isLight ? neutralPalette.white_3 : neutralPalette.white_3,

    surface: isLight ? basePalette.white : basePalette.dark_1,
    surface_neutral: isLight ? neutralPalette.gray_1 : neutralPalette.gray_13,

    inverted: isLight ? basePalette.dark_1 : basePalette.white,
  };
};
