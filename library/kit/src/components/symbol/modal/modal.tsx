import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import RNModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Blur } from '../../wrappers';
import { scales, useTheme } from '../../../theme';

import { createPositionStyle } from './styles/position/position.style.ts';
import { createStyle } from './default.styles.ts';

export interface IProps {
  visible: boolean;
  onClose(): void;
  onCloseComplete?(): void;
  position?: 'center' | 'bottom';
  swipeDisabled?: boolean;
  closeDisabled?: boolean;
}

export const Modal: React.FC<React.PropsWithChildren<IProps>> = ({
  visible,
  onClose,
  onCloseComplete,
  children,
  position = 'center',
  swipeDisabled = false,
  closeDisabled = false,
  ...props
}) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const isBottomPosition = position === 'bottom';
  const baseStyles = React.useMemo(() => createStyle(), []);
  const positionStyles = React.useMemo(() => createPositionStyle(theme, position), [theme, position]);
  const handleClose = React.useCallback(() => {
    if (!closeDisabled) {
      onClose();
    }
  }, [closeDisabled, onClose]);

  return (
    <RNModal
      style={baseStyles.modal}
      isVisible={visible}
      // NOTE: iOS reports completed dismissal via onDismiss, while Android uses onModalHide
      onDismiss={Platform.OS === 'ios' ? onCloseComplete : undefined}
      onModalHide={Platform.OS === 'ios' ? undefined : onCloseComplete}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      // backdropColor={theme.colors.icon.base.static_dark_quaternary}
      swipeDirection={isBottomPosition && !swipeDisabled && !closeDisabled ? 'down' : undefined}
      onSwipeComplete={handleClose}
      animationIn={isBottomPosition ? 'slideInUp' : 'fadeIn'}
      animationOut={isBottomPosition ? 'slideOutDown' : 'fadeOut'}
      avoidKeyboard={isBottomPosition}
      customBackdrop={<Blur />}
      backdropOpacity={1}
      backdropTransitionInTiming={0}
      {...props}
    >
      <Pressable style={StyleSheet.absoluteFill} disabled={closeDisabled} onPress={handleClose} />
      <View
        pointerEvents="box-none"
        style={[
          baseStyles.wrapper,
          positionStyles.wrapper,
          { paddingBottom: (position === 'bottom' ? insets.bottom : 0) + scales[24] },
        ]}
      >
        <View style={positionStyles.container}>{children}</View>
      </View>
    </RNModal>
  );
};
