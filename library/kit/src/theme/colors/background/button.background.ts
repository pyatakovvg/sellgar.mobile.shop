import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette, negativePalette, informativePalette } from '../../palette';

export const buttonBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    primary: isLight ? informativePalette.blue_8 : informativePalette.blue_8,
    primary_hover: isLight ? informativePalette.blue_9 : informativePalette.blue_9,
    primary_disabled: isLight ? informativePalette.blue_2 : informativePalette.blue_2,

    secondary: isLight ? basePalette.white : neutralPalette.gray_13,
    secondary_hover: isLight ? neutralPalette.gray_1 : neutralPalette.gray_12,
    secondary_disabled: isLight ? basePalette.white : neutralPalette.gray_13,

    tertiary: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,
    tertiary_hover: isLight ? neutralPalette.gray_2a : neutralPalette.white_2,
    tertiary_disabled: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,

    ghost: isLight ? basePalette.transparent : basePalette.transparent,
    ghost_hover: isLight ? neutralPalette.gray_1a : neutralPalette.white_2,
    ghost_disabled: isLight ? basePalette.transparent : basePalette.transparent,

    destructive: isLight ? negativePalette.red_8 : negativePalette.red_8,
    destructive_hover: isLight ? negativePalette.red_9 : negativePalette.red_9,
    destructive_disabled: isLight ? negativePalette.red_2 : negativePalette.red_2a,

    destructive_secondary: isLight ? basePalette.white : basePalette.dark_1,
    destructive_secondary_hover: isLight ? negativePalette.red_1 : neutralPalette.gray_13,
    destructive_secondary_disabled: isLight ? basePalette.white : basePalette.dark_1,

    destructive_tertiary: isLight ? negativePalette.red_1a : neutralPalette.white_1,
    destructive_tertiary_hover: isLight ? negativePalette.red_2a : neutralPalette.white_2,
    destructive_tertiary_disabled: isLight ? negativePalette.red_1a : neutralPalette.white_1,

    destructive_ghost: isLight ? basePalette.transparent : basePalette.transparent,
    destructive_ghost_hover: isLight ? negativePalette.red_1a : neutralPalette.white_1,
    destructive_ghost_disabled: isLight ? basePalette.transparent : basePalette.transparent,
  };
};
