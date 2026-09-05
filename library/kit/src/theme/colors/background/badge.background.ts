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

export const badgeBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    gray: isLight ? neutralPalette.gray_2 : neutralPalette.white_3,
    gray_disabled: isLight ? neutralPalette.gray_2 : neutralPalette.white_2,
    gray_accent: isLight ? neutralPalette.gray_9 : neutralPalette.gray_7,

    blue: isLight ? informativePalette.blue_2 : informativePalette.blue_5a,
    blue_disabled: isLight ? informativePalette.blue_1 : informativePalette.blue_3a,
    blue_accent: isLight ? informativePalette.blue_8 : informativePalette.blue_8,

    green: isLight ? positivePalette.green_2 : positivePalette.green_5a,
    green_disabled: isLight ? positivePalette.green_1 : positivePalette.green_3a,
    green_accent: isLight ? positivePalette.green_8 : positivePalette.green_8,

    orange: isLight ? warningPalette.orange_2 : warningPalette.orange_4a,
    orange_disabled: isLight ? warningPalette.orange_1 : warningPalette.orange_3a,
    orange_accent: isLight ? warningPalette.orange_8 : warningPalette.orange_8,

    red: isLight ? negativePalette.red_2 : negativePalette.red_5a,
    red_disabled: isLight ? negativePalette.red_1 : negativePalette.red_3a,
    red_accent: isLight ? negativePalette.red_8 : negativePalette.red_8,

    purple: isLight ? brandPalette.purple_2 : brandPalette.purple_5a,
    purple_disabled: isLight ? brandPalette.purple_1 : brandPalette.purple_3a,
    purple_accent: isLight ? brandPalette.purple_8 : brandPalette.purple_8,

    white: isLight ? basePalette.white : basePalette.white,
    white_disabled: isLight ? basePalette.white : neutralPalette.white_6,
    white_accent: isLight ? basePalette.white : neutralPalette.gray_12,

    surface: isLight ? basePalette.white : neutralPalette.gray_12,
  };
};
