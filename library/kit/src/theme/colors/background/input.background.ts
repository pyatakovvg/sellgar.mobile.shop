import { ColorSchemeName } from 'react-native';

import { basePalette } from '../../palette';

export const inputBackground = (theme: ColorSchemeName) => {
  const isLight = theme === 'light';

  return {
    normal: isLight ? basePalette.white : basePalette.dark_1,
    focus: isLight ? basePalette.white : basePalette.dark_1,
    disabled: isLight ? basePalette.white : basePalette.dark_1,
  };
};
