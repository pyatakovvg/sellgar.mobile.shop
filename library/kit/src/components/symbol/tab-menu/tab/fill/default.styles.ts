import { StyleSheet } from 'react-native';

import { radiusMeansurements, scales, shadows, type TTheme } from '../../../../../theme';

type TSize = 'lg' | 'md' | 'sm';
type TStyle = 'primary' | 'secondary';
type TShape = 'rounded' | 'pill';

const sizeStyles = (size: TSize) => {
  switch (size) {
    case 'md':
      return { paddingHorizontal: scales[12], paddingVertical: scales[8] };
    case 'sm':
      return { paddingHorizontal: scales[12], paddingVertical: scales[6] };
    default:
      return { paddingHorizontal: scales[16], paddingVertical: scales[12] };
  }
};

export const createStyles = (theme: TTheme, size: TSize, style: TStyle, shape: TShape) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      borderColor: theme.palette.base.transparent,
      borderRadius: shape === 'pill' ? radiusMeansurements.full : radiusMeansurements.xl,
      borderWidth: scales[1],
      flexDirection: 'row',
      justifyContent: 'center',
      ...sizeStyles(size),
    },
    wrapperActive: {
      backgroundColor:
        style === 'primary' ? theme.colors.background.button.secondary : theme.colors.background.button.tertiary,
      borderColor: style === 'primary' ? theme.colors.border.action.normal : theme.colors.background.button.tertiary,
      ...shadows().xs,
    },
    icon: {
      alignItems: 'center',
      color: theme.colors.icon.base.secondary,
      justifyContent: 'center',
    },
    title: {
      color: theme.colors.text.base.secondary,
      paddingHorizontal: scales[4],
    },
    titleActive: {
      color: theme.colors.text.base.primary,
    },
    badge: {
      paddingHorizontal: scales[4],
    },
  });
