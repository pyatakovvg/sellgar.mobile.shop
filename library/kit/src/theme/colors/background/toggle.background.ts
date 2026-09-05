import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette, positivePalette } from '../../palette';

export const toggleBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    default: isLight ? neutralPalette.gray_5 : neutralPalette.gray_9,
    hover: isLight ? neutralPalette.gray_6 : neutralPalette.gray_6,
    disabled: isLight ? neutralPalette.gray_2 : neutralPalette.gray_12,

    active: isLight ? positivePalette.green_8 : positivePalette.green_8,
    active_hover: isLight ? positivePalette.green_9 : positivePalette.green_9,
    active_disabled: isLight ? positivePalette.green_3 : positivePalette.green_11,

    handle: isLight ? basePalette.white : basePalette.white,
    handle_disabled: isLight ? neutralPalette.gray_4 : neutralPalette.gray_4,
  };
};
