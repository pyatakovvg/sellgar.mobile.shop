import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createSizeStyle = (theme: TTheme, size: 'lg' | 'md' | 'sm' | 'xs') => {
  switch (size) {
    case 'lg':
      return StyleSheet.create({
        wrapper: {
          height: 48,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        text: {
          paddingLeft: 4,
          paddingRight: 4,
          fontSize: theme.typography.fontSize.body_s,
          lineHeight: theme.typography.lineHeight.body_s,
          letterSpacing: theme.typography.letterSpacing.body_s,
          fontWeight: theme.typography.weight.medium,
        },
        leadIcon: {
          width: 20,
          height: 20,
          marginRight: 4,
        },
        badge: {
          marginLeft: 4,
        },
        tailIcon: {
          width: 20,
          height: 20,
          marginLeft: 4,
        },
        icon: {
          fontSize: 18,
        },
      });
    case 'sm':
      return StyleSheet.create({
        wrapper: {
          height: 32,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          paddingRight: 10,
        },
        text: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 4,
          paddingRight: 4,
          fontSize: theme.typography.fontSize.caption_l,
          lineHeight: theme.typography.lineHeight.caption_l,
          letterSpacing: theme.typography.letterSpacing.caption_l,
          fontWeight: theme.typography.weight.medium,
        },
        leadIcon: {
          width: 16,
          height: 17,
          marginRight: 2,
        },
        badge: {
          marginLeft: 2,
        },
        tailIcon: {
          width: 16,
          height: 16,
          marginLeft: 2,
        },
        icon: {
          fontSize: 16,
        },
      });
    case 'xs':
      return StyleSheet.create({
        wrapper: {
          height: 24,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 8,
          paddingRight: 8,
        },
        text: {
          fontSize: theme.typography.fontSize.caption_m,
          lineHeight: theme.typography.lineHeight.caption_m,
          letterSpacing: theme.typography.letterSpacing.caption_m,
          fontWeight: theme.typography.weight.medium,
        },
        leadIcon: {
          width: 14,
          height: 14,
          marginRight: 4,
        },
        badge: {
          marginLeft: 4,
        },
        tailIcon: {
          width: 14,
          height: 14,
          marginLeft: 4,
        },
        icon: {
          fontSize: 14,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          height: 40,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 12,
          paddingRight: 12,
        },
        text: {
          paddingLeft: 4,
          paddingRight: 4,
          fontSize: theme.typography.fontSize.caption_l,
          lineHeight: theme.typography.lineHeight.caption_l,
          letterSpacing: theme.typography.letterSpacing.caption_l,
          fontWeight: theme.typography.weight.medium,
        },
        leadIcon: {
          width: 20,
          height: 20,
          marginRight: 3,
        },
        badge: {
          marginLeft: 3,
        },
        tailIcon: {
          width: 20,
          height: 20,
          marginLeft: 3,
        },
        icon: {
          fontSize: 18,
        },
      });
  }
};
