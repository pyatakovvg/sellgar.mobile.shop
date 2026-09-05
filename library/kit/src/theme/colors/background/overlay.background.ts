import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette } from '../../palette';

export const overlayBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    normal: isLight ? basePalette.transparent : basePalette.transparent,
    hover: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,

    active_normal: isLight ? neutralPalette.gray_1a : neutralPalette.white_1,
    active_hover: isLight ? neutralPalette.gray_2a : neutralPalette.white_2,

    custom: isLight ? neutralPalette.gray_2a : neutralPalette.white_2,
  };
};
