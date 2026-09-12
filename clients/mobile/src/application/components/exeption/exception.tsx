import { Button, Typography, useTheme } from '@library/kit';
import { type RuntimeExceptionRecovery, useException } from '@sellgar/app/native';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

type RecoveryCommand = () => Promise<void>;

const invoke = (command: RecoveryCommand) => (): void => {
  void command().catch(() => undefined);
};

const RecoveryActions: React.FC<{
  recovery: RuntimeExceptionRecovery;
}> = ({ recovery }) => {
  return (
    <View>
      {recovery.retry && (
        <Button loading={recovery.retry.inProcess} onPress={invoke(recovery.retry)}>
          Повторить
        </Button>
      )}

      {recovery.close && (
        <Button loading={recovery.close.inProcess} style="secondary" onPress={invoke(recovery.close)}>
          Закрыть
        </Button>
      )}

      {!recovery.close && recovery.back && (
        <Button loading={recovery.back.inProcess} style="secondary" onPress={invoke(recovery.back)}>
          Назад
        </Button>
      )}

      {recovery.root && (
        <Button loading={recovery.root.inProcess} style="tertiary" onPress={invoke(recovery.root)}>
          На главный экран
        </Button>
      )}
    </View>
  );
};

export const Exception: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const exception = useException();

  return (
    <View style={styles.wrapper}>
      <Typography size="h5" weight="semi-bold">
        <Text style={styles.title}>Что-то пошло не так</Text>
      </Typography>

      <Typography size="body-m" weight="regular">
        <Text style={styles.description}>
          {exception.boundary.owner.kind === 'application'
            ? 'Не удалось запустить приложение'
            : 'Не удалось загрузить содержимое'}
        </Text>
      </Typography>

      <Typography size="caption-m" weight="regular">
        <Text style={styles.debug}>
          {exception.boundary.owner.kind}
          {' · '}
          {exception.origin.phase}
          {'\n'}
          {exception.error.message}
          {'\n'}
          {exception.error.stack}
        </Text>
      </Typography>

      <RecoveryActions recovery={exception.recovery} />
    </View>
  );
};
