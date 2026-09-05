import { ColorSchemeName } from 'react-native';

import { basePalette, neutralPalette } from '../../palette';

export const modalBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    default: isLight ? basePalette.white : neutralPalette.gray_12,

    neutral: isLight ? neutralPalette.gray_1 : neutralPalette.gray_11,
  };
};
