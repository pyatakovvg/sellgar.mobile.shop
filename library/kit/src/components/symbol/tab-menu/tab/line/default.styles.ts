import { StyleSheet } from 'react-native';

import { scales, type TTheme } from '../../../../../theme';

type TSize = 'lg' | 'md' | 'sm';

const sizeStyles = (size: TSize) => {
  switch (size) {
    case 'md':
      return { paddingBottom: scales[8], paddingTop: scales[6] };
    case 'sm':
      return { paddingVertical: scales[5] };
    default:
      return { paddingBottom: scales[12], paddingTop: scales[1] };
  }
};

export const createStyles = (theme: TTheme, size: TSize) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      borderBottomColor: theme.palette.base.transparent,
      borderBottomWidth: scales[2],
      flexDirection: 'row',
      justifyContent: 'center',
      ...sizeStyles(size),
    },
    wrapperActive: {
      borderBottomColor: theme.colors.border.select.primary,
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
