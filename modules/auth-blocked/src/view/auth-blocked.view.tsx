import { Button, Icon, Typography, useTheme } from '@library/kit';
import { Viewport, useLoaderData, useSubmit } from '@sellgar/app/native';

import React from 'react';
import { Linking, Text, View } from 'react-native';

import { AuthBlockedControllerInterface } from '../classes/controller/auth-blocked-controller.interface.ts';
import { createStyles } from './default.styles.ts';

export const AuthBlockedView: React.FC = () => {
  const data = useLoaderData(AuthBlockedControllerInterface);
  const close = useSubmit(AuthBlockedControllerInterface);
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.content}>
          <Icon icon="shield-cross-line" style={styles.icon} />
          <Typography size="h6" weight="medium">
            <Text style={styles.title}>{data.title}</Text>
          </Typography>
          <Typography size="body-s" weight="regular">
            <Text style={styles.message}>
              Обратитесь в{' '}
              <Text style={styles.link} onPress={() => void Linking.openURL('mailto:support@tiyn.io')}>
                поддержку
              </Text>
              , чтобы узнать подробности
            </Text>
          </Typography>
        </View>
      </Viewport.Slot>
      <Viewport.Slot.Fixed>
        <View style={styles.actions}>
          <Button loading={close.inProcess} onPress={() => void close()} size="lg" style="tertiary">
            Закрыть
          </Button>
        </View>
      </Viewport.Slot.Fixed>
    </Viewport>
  );
};
