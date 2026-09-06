import { AuthHeader } from '@library/design';
import { Button, Icon, scales } from '@library/kit';
import { Viewport, useSubmit } from '@sellgar/app/native';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ReidentificationConfirmControllerInterface } from '../classes/controller/reidentification-confirm-controller.interface.ts';

export const ReidentificationConfirmView: React.FC = () => {
  const submit = useSubmit(ReidentificationConfirmControllerInterface);

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.content}>
          <AuthHeader
            description={'Так мы защитим ваш кошелёк.\nПодтверждение займёт около минуты'}
            icon="profile"
            title={'Новое устройство?\nПодтвердите, что это вы'}
          />
        </View>
      </Viewport.Slot>
      <Viewport.Slot.Fixed>
        <View style={styles.actions}>
          <Button
            loading={submit.inProcess}
            onPress={() => void submit('confirm')}
            size="lg"
            tailIcon={<Icon icon="arrow-right-line" />}
          >
            Подтвердить, что это я
          </Button>
          <Button disabled={submit.inProcess} onPress={() => void submit('cancel')} size="lg" style="secondary">
            Выйти
          </Button>
        </View>
      </Viewport.Slot.Fixed>
    </Viewport>
  );
};

const styles = StyleSheet.create({
  actions: {
    gap: scales[12],
    paddingHorizontal: scales[24],
    paddingVertical: scales[24],
  },
  content: {
    flex: 1,
    paddingHorizontal: scales[24],
    paddingTop: scales[68],
  },
});
