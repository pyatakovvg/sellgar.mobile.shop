import { ColorSchemeName } from 'react-native';

import { baseIcon, statusIcon, accentIcon, overlayBackground } from './colors';
import { textBase, textStatus, textAccent } from './colors';
import { baseBorder, selectBorder, actionBorder, accentBorder } from './colors';
import {
  badgeBackground,
  accentBackground,
  buttonBackground,
  checkboxBackground,
  inputBackground,
  surfaceBackground,
  chipBackground,
} from './colors';
import {
  radiusMeansurements,
  fontSizeTypography,
  weightTypography,
  lineHeightTypography,
  letterSpacingTypography,
} from './numbers';
import {
  basePalette,
  brandPalette,
  neutralPalette,
  warningPalette,
  negativePalette,
  positivePalette,
  informativePalette,
} from './palette';

export const themeCreate = (theme: ColorSchemeName) => ({
  colors: {
    text: {
      base: textBase(theme),
      status: textStatus(theme),
      accent: textAccent(theme),
    },
    icon: {
      base: baseIcon(theme),
      status: statusIcon(theme),
      accent: accentIcon(theme),
    },
    border: {
      base: baseBorder(theme),
      select: selectBorder(theme),
      action: actionBorder(theme),
      accent: accentBorder(theme),
    },
    background: {
      input: inputBackground(theme),
      badge: badgeBackground(theme),
      accent: accentBackground(theme),
      button: buttonBackground(theme),
      surface: surfaceBackground(theme),
      checkbox: checkboxBackground(theme),
      chip: chipBackground(theme),
      overlay: overlayBackground(theme),
    },
  },
  numbers: {
    radius: radiusMeansurements,
  },
  typography: {
    weight: weightTypography,
    fontSize: fontSizeTypography,
    lineHeight: lineHeightTypography,
    letterSpacing: letterSpacingTypography,
  },
  palette: {
    base: basePalette,
    brand: brandPalette,
    neutral: neutralPalette,
    warning: warningPalette,
    negative: negativePalette,
    positive: positivePalette,
    information: informativePalette,
  },
});
