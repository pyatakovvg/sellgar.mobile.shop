import { TextStyle } from 'react-native';

type WeightName = 'light' | 'regular' | 'medium' | 'semi_bold' | 'bold' | 'extra_bold' | 'black';

export const weightTypography = {
  light: 300,
  regular: 400,
  medium: 500,
  semi_bold: 600,
  bold: 700,
  extra_bold: 800,
  black: 900,
} as Record<WeightName, TextStyle['fontWeight']>;
