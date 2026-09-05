import { StyleSheet } from 'react-native';

import { radiusMeansurements, scales, shadows, TTheme } from '../../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: scales[12],
      padding: scales[16],
      borderRadius: radiusMeansurements.xl,
      borderWidth: 1,
      borderColor: theme.colors.border.action.normal,
      backgroundColor: theme.colors.background.surface.default,
      ...shadows().xs,
    },
    aside: {},
    icon: {
      alignItems: 'center',
      width: scales[20],
      paddingVertical: scales[2],
      fontSize: scales[20],
    },
    content: {
      flex: 1,
      gap: scales[12],
    },
    container: {
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      gap: scales[4],
    },
    title: {
      flexShrink: 1,
      color: theme.colors.text.base.primary,
    },
    description: {
      flexShrink: 1,
      color: theme.colors.text.base.secondary,
    },
    close: {
      alignItems: 'center',
      width: scales[20],
      paddingVertical: scales[2],
      fontSize: scales[20],
      color: theme.colors.text.base.secondary,
    },
    slot: {},
    icon_info: {
      color: theme.colors.icon.status.info,
    },
    icon_warning: {
      color: theme.colors.icon.status.warning,
    },
    icon_success: {
      color: theme.colors.icon.status.success,
    },
    icon_destructive: {
      color: theme.colors.icon.status.destructive,
    },
  });
};
