import { scales, TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: scales[24],
      paddingTop: scales[16],
    },
    container: {
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userName: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleIconView: {
      width: scales[24],
      height: scales[24],
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background.accent.blue_accent,
      marginRight: scales[8],
    },
    titleIcon: {
      color: theme.colors.icon.base.static_white,
      fontSize: 12,
    },
    title: {
      color: theme.colors.icon.base.primary,
    },
    arrowIcon: {
      fontSize: 16,
      color: theme.colors.icon.base.tertiary,
      marginLeft: scales[8],
    },
    iconButton: {
      width: scales[32],
      height: scales[32],
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: scales[24],
      color: theme.colors.icon.base.secondary,
    },
    iconActive: {
      color: theme.colors.icon.accent.blue_accent,
    },
    iconsGroup: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scales[8],
    },
    identification: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scales[12],
    },
    identificationIcon: {
      fontSize: 24,
      color: theme.colors.icon.status.info,
      marginRight: scales[12],
    },
    identificationText: {
      color: theme.colors.text.status.info,
    },
  });
};
