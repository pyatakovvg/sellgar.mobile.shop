import { PinCode } from '@library/design';
import { Icon, useTheme } from '@library/kit';
import { Viewport, useSubmit } from '@sellgar/app/native';

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ConfirmAccessCodeControllerInterface } from '../classes/controller/confirm/confirm-access-code-controller.interface.ts';
import { SetAccessCodeControllerInterface } from '../classes/controller/set/set-access-code-controller.interface.ts';
import { AccessCodesMismatchError } from '../classes/error/access-codes-mismatch.error.ts';
import { createStyles } from './default.styles.ts';

const CODE_LENGTH = 4;

export const SetSignInCodeView: React.FC = () => {
  const begin = useSubmit(SetAccessCodeControllerInterface);
  const confirm = useSubmit(ConfirmAccessCodeControllerInterface);
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(), []);
  const pinCodeRef = React.useRef({ shakeDots: () => undefined });
  const submittedCode = React.useRef<string | null>(null);
  const [code, setCode] = React.useState('');
  const confirmation = begin.data?.step === 'confirm';
  const inProcess = begin.inProcess || confirm.inProcess;
  const errorMessage = confirm.error instanceof AccessCodesMismatchError ? `${confirm.error.message}\n` : '';

  React.useEffect(() => {
    if (confirm.error instanceof AccessCodesMismatchError) {
      pinCodeRef.current.shakeDots();
    }
  }, [confirm.error]);

  React.useEffect(() => {
    if (code.length !== CODE_LENGTH || submittedCode.current === code || inProcess) {
      return;
    }

    submittedCode.current = code;

    if (!confirmation) {
      void begin({ code }).then((result) => {
        if (result?.step === 'confirm') {
          setCode('');
          submittedCode.current = null;
        }
      });
      return;
    }

    setCode('');
    submittedCode.current = null;
    void confirm({ code });
  }, [begin, code, confirm, confirmation, inProcess]);

  const handleChange = React.useCallback(
    (value: string) => {
      if (inProcess || code.length >= CODE_LENGTH) return;

      setCode((current) => `${current}${value}`.slice(0, CODE_LENGTH));
    },
    [code.length, inProcess],
  );
  const handleDelete = React.useCallback(() => {
    if (inProcess) return;

    setCode((current) => current.slice(0, -1));
    submittedCode.current = null;
  }, [inProcess]);
  const dots = React.useMemo(
    () => Array.from({ length: CODE_LENGTH }, (_, index) => index < code.length),
    [code.length],
  );

  return (
    <Viewport>
      <Viewport.Slot grow>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <PinCode
              dots={dots}
              errorMessage={errorMessage}
              label={confirmation ? 'Повторите код\n' : 'Придумайте код\nдля быстрого входа'}
              loading={confirm.inProcess}
              numPadRightSlot={
                code.length > 0 ? (
                  <TouchableOpacity disabled={inProcess} onPress={handleDelete}>
                    <Icon
                      icon="delete-back-2-line"
                      style={{ color: theme.colors.background.accent.blue_accent, fontSize: 32 }}
                    />
                  </TouchableOpacity>
                ) : undefined
              }
              onChange={handleChange}
              ref={pinCodeRef}
            />
          </View>
        </View>
      </Viewport.Slot>
    </Viewport>
  );
};
