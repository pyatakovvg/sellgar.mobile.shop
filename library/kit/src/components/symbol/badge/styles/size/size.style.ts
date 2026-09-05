import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createSizeStyle = (theme: TTheme, size: 'lg' | 'md' | 'sm' | 'xs') => {
  switch (size) {
    case 'lg':
      return StyleSheet.create({
        wrapper: {
          height: 28,
          paddingTop: 4,
          paddingRight: 6,
          paddingBottom: 4,
          paddingLeft: 6,
        },
        text: {
          paddingLeft: 4,
          paddingRight: 4,
          fontSize: theme.typography.fontSize.caption_l,
          lineHeight: theme.typography.lineHeight.caption_l,
          letterSpacing: theme.typography.letterSpacing.caption_l,
        },
        leadIcon: {
          width: 16,
          height: 16,
        },
        tailIcon: {
          width: 16,
          height: 16,
        },
        icon: {
          fontSize: 14,
        },
      });
    case 'sm':
      return StyleSheet.create({
        wrapper: {
          height: 20,
          paddingTop: 2,
          paddingRight: 3,
          paddingBottom: 2,
          paddingLeft: 3,
        },
        text: {
          paddingLeft: 2,
          paddingRight: 2,
          fontSize: theme.typography.fontSize.caption_m,
          lineHeight: theme.typography.lineHeight.caption_m,
          letterSpacing: theme.typography.letterSpacing.caption_m,
        },
        leadIcon: {
          width: 14,
          height: 14,
        },
        tailIcon: {
          width: 14,
          height: 14,
        },
        icon: {
          fontSize: 12,
        },
      });
    case 'xs':
      return StyleSheet.create({
        wrapper: {
          height: 16,
          paddingLeft: 2,
          paddingRight: 2,
        },
        text: {
          fontSize: theme.typography.fontSize.caption_m,
          lineHeight: theme.typography.lineHeight.caption_m,
          letterSpacing: theme.typography.letterSpacing.caption_m,
        },
        leadIcon: {
          width: 12,
          height: 12,
        },
        badge: {},
        tailIcon: {
          width: 12,
          height: 12,
        },
        icon: {
          fontSize: 10,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          height: 24,
          paddingTop: 2,
          paddingRight: 4,
          paddingBottom: 2,
          paddingLeft: 4,
        },
        text: {
          paddingLeft: 4,
          paddingRight: 4,

          fontSize: theme.typography.fontSize.caption_l,
          lineHeight: theme.typography.lineHeight.caption_l,
          letterSpacing: theme.typography.letterSpacing.caption_l,
        },
        leadIcon: {
          width: 16,
          height: 16,
        },
        tailIcon: {
          width: 16,
          height: 16,
        },
        icon: {
          fontSize: 16,
        },
      });
  }
};
