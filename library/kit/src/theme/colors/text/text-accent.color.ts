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

export const textAccent = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    blue: isLight ? informativePalette.blue_11 : informativePalette.blue_9,
    blue_inverted: isLight ? informativePalette.blue_11 : basePalette.white,
    blue_accent: isLight ? informativePalette.blue_8 : informativePalette.blue_8,
    blue_secondary: isLight ? informativePalette.blue_7a : neutralPalette.white_8,
    blue_tertiary: isLight ? informativePalette.blue_5a : neutralPalette.white_5,

    green: isLight ? positivePalette.green_11 : positivePalette.green_9,
    green_inverted: isLight ? positivePalette.green_11 : basePalette.white,
    green_accent: isLight ? positivePalette.green_8 : positivePalette.green_8,
    green_secondary: isLight ? positivePalette.green_7a : neutralPalette.white_8,
    green_tertiary: isLight ? positivePalette.green_5a : neutralPalette.white_5,

    orange: isLight ? warningPalette.orange_11 : warningPalette.orange_9,
    orange_inverted: isLight ? warningPalette.orange_11 : basePalette.white,
    orange_accent: isLight ? warningPalette.orange_8 : warningPalette.orange_8,
    orange_secondary: isLight ? warningPalette.orange_7a : neutralPalette.white_8,
    orange_tertiary: isLight ? warningPalette.orange_5a : neutralPalette.white_5,

    red: isLight ? negativePalette.red_11 : negativePalette.red_9,
    red_inverted: isLight ? negativePalette.red_11 : basePalette.white,
    red_accent: isLight ? negativePalette.red_8 : negativePalette.red_8,
    red_secondary: isLight ? negativePalette.red_7a : neutralPalette.white_8,
    red_tertiary: isLight ? negativePalette.red_5a : neutralPalette.white_5,

    purple: isLight ? brandPalette.purple_11 : brandPalette.purple_9,
    purple_inverted: isLight ? brandPalette.purple_11 : basePalette.white,
    purple_accent: isLight ? brandPalette.purple_8 : brandPalette.purple_8,
    purple_secondary: isLight ? brandPalette.purple_7a : neutralPalette.white_8,
    purple_tertiary: isLight ? brandPalette.purple_5a : neutralPalette.white_5,
  };
};
