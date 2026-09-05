import { ColorSchemeName } from 'react-native';

import {
  basePalette,
  neutralPalette,
  positivePalette,
  warningPalette,
  negativePalette,
  informativePalette,
} from '../../palette';

export const surfaceBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    default: isLight ? basePalette.white : basePalette.dark_1,

    inverted: isLight ? basePalette.dark_1 : basePalette.white,

    neutral: isLight ? neutralPalette.gray_1 : neutralPalette.gray_13,
    neutral_subtle: isLight ? neutralPalette.gray_2 : neutralPalette.gray_12,

    destructive: isLight ? negativePalette.red_1 : negativePalette.red_13,
    destructive_subtle: isLight ? negativePalette.red_8 : negativePalette.red_8,

    warning: isLight ? warningPalette.orange_1 : warningPalette.orange_13,
    warning_subtle: isLight ? warningPalette.orange_2 : warningPalette.orange_12,
    warning_accent: isLight ? warningPalette.orange_8 : warningPalette.orange_8,

    success: isLight ? positivePalette.green_1 : positivePalette.green_13,
    success_subtle: isLight ? positivePalette.green_2 : positivePalette.green_12,
    success_accent: isLight ? positivePalette.green_8 : positivePalette.green_8,

    info: isLight ? informativePalette.blue_1 : informativePalette.blue_13,
    info_subtle: isLight ? informativePalette.blue_2 : informativePalette.blue_12,
    info_accent: isLight ? informativePalette.blue_8 : informativePalette.blue_8,
  };
};
