import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette, brandPalette } from '../../palette';

export const checkboxBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    default: isLight ? basePalette.white : neutralPalette.gray_12,
    checked: isLight ? brandPalette.purple_8 : brandPalette.purple_8,
    disabled: isLight ? neutralPalette.gray_3 : neutralPalette.gray_11,
  };
};
