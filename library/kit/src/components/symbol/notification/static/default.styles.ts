import { StyleSheet } from 'react-native';

import { radiusMeansurements, scales, shadows, TTheme } from '../../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      gap: scales[12],
      padding: scales[16],
      borderRadius: radiusMeansurements.xl,
      borderWidth: 1,
      borderColor: theme.colors.border.action.normal,
      ...shadows().xs,
    },
    wrapper_sm: {
      padding: scales[8],
    },
    aside: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flex: 1,
      gap: scales[8],
    },
    icon: {
      alignItems: 'center',
      width: scales[20],
      fontSize: scales[20],
    },
    content: {
      flex: 1,
      gap: scales[12],
    },
    container: {
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      gap: scales[4],
      minWidth: 0,
    },
    title: {
      color: theme.colors.text.base.primary,
      flexShrink: 1,
    },
    description: {
      color: theme.colors.text.base.secondary,
      flexShrink: 1,
    },
    slot: {
      alignSelf: 'center',
      flexShrink: 0,
    },
    status_info: {
      backgroundColor: theme.colors.background.surface.info,
    },
    icon_info: {
      color: theme.colors.icon.status.info,
    },
    status_warning: {
      backgroundColor: theme.colors.background.surface.warning,
    },
    icon_warning: {
      color: theme.colors.icon.status.warning,
    },
    status_success: {
      backgroundColor: theme.colors.background.surface.success,
    },
    icon_success: {
      color: theme.colors.icon.status.success,
    },
    status_destructive: {
      backgroundColor: theme.colors.background.surface.destructive,
    },
    icon_destructive: {
      color: theme.colors.icon.status.destructive,
    },
    status_neutral: {
      backgroundColor: theme.colors.background.surface.neutral,
    },
    icon_neutral: {
      color: theme.colors.icon.base.quaternary,
    },
  });
};
