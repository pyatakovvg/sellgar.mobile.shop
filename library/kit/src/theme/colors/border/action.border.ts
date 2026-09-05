import { ColorSchemeName } from 'react-native';

import { neutralPalette, positivePalette, warningPalette, negativePalette, informativePalette } from '../../palette';

export const actionBorder = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    normal: isLight ? neutralPalette.gray_3 : neutralPalette.white_3,
    disabled: isLight ? neutralPalette.gray_2 : neutralPalette.white_2,
    focus: isLight ? informativePalette.blue_8 : informativePalette.blue_8,
    focus_light: isLight ? informativePalette.blue_6 : informativePalette.blue_6,
    focus_destructive: isLight ? negativePalette.red_8 : negativePalette.red_8,
    focus_destructive_light: isLight ? negativePalette.red_6 : negativePalette.red_6,

    destructive: isLight ? negativePalette.red_4 : negativePalette.red_4a,
    destructive_light: isLight ? negativePalette.red_5 : negativePalette.red_5a,
    destructive_disabled: isLight ? negativePalette.red_3 : negativePalette.red_3a,

    success: isLight ? positivePalette.green_4 : positivePalette.green_4a,
    success_hover: isLight ? positivePalette.green_5 : positivePalette.green_5a,

    warning: isLight ? warningPalette.orange_4 : warningPalette.orange_4a,
    warning_hover: isLight ? warningPalette.orange_5 : warningPalette.orange_5a,

    info: isLight ? informativePalette.blue_4 : informativePalette.blue_4a,
    info_hover: isLight ? informativePalette.blue_5 : informativePalette.blue_5a,
  };
};
