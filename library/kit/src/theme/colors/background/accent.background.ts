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

export const accentBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    gray: isLight ? neutralPalette.gray_1 : neutralPalette.gray_13,
    gray_subtle: isLight ? neutralPalette.gray_2 : neutralPalette.gray_12,
    gray_accent: isLight ? neutralPalette.gray_8 : neutralPalette.gray_9,
    gray_bold: isLight ? basePalette.dark_1 : basePalette.white,

    blue: isLight ? informativePalette.blue_1 : informativePalette.blue_13,
    accent_blue_subtle: isLight ? informativePalette.blue_2 : informativePalette.blue_12,
    blue_accent: isLight ? informativePalette.blue_8 : informativePalette.blue_9,

    green: isLight ? positivePalette.green_1 : positivePalette.green_13,
    accent_green_subtle: isLight ? positivePalette.green_2 : positivePalette.green_12,
    green_accent: isLight ? positivePalette.green_8 : positivePalette.green_9,

    accent_orange: isLight ? warningPalette.orange_1 : warningPalette.orange_13,
    accent_orange_subtle: isLight ? warningPalette.orange_2 : warningPalette.orange_12,
    accent_orange_accent: isLight ? warningPalette.orange_8 : warningPalette.orange_9,

    accent_red: isLight ? negativePalette.red_1 : negativePalette.red_13,
    accent_red_subtle: isLight ? negativePalette.red_2 : negativePalette.red_12,
    accent_red_accent: isLight ? negativePalette.red_8 : negativePalette.red_9,

    accent_purple: isLight ? brandPalette.purple_1 : brandPalette.purple_13,
    accent_purple_subtle: isLight ? brandPalette.purple_2 : brandPalette.purple_12,
    accent_purple_accent: isLight ? brandPalette.purple_8 : brandPalette.purple_9,
  };
};
