import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette } from '../../palette';

export const baseIcon = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    primary: isLight ? neutralPalette.gray_13 : basePalette.white,
    secondary: isLight ? neutralPalette.gray_9a : neutralPalette.white_9,
    tertiary: isLight ? neutralPalette.gray_7a : neutralPalette.white_7,
    quaternary: isLight ? neutralPalette.gray_5a : neutralPalette.white_5,

    inverted: isLight ? basePalette.white : basePalette.dark_1,
    inverted_secondary: isLight ? neutralPalette.white_9 : neutralPalette.gray_9a,
    inverted_tertiary: isLight ? neutralPalette.white_7 : neutralPalette.gray_7a,
    inverted_quaternary: isLight ? neutralPalette.white_6 : neutralPalette.gray_5a,

    static_dark: isLight ? neutralPalette.gray_13 : neutralPalette.gray_13,
    static_dark_secondary: isLight ? neutralPalette.gray_9a : neutralPalette.gray_9a,
    static_dark_tertiary: isLight ? neutralPalette.gray_7a : neutralPalette.gray_7a,
    static_dark_quaternary: isLight ? neutralPalette.gray_5a : neutralPalette.gray_5a,

    static_white: isLight ? basePalette.white : basePalette.white,
    static_white_secondary: isLight ? neutralPalette.white_9 : neutralPalette.white_9,
    static_white_tertiary: isLight ? neutralPalette.white_7 : neutralPalette.white_7,
    static_white_quaternary: isLight ? neutralPalette.white_5 : neutralPalette.white_5,
  };
};
