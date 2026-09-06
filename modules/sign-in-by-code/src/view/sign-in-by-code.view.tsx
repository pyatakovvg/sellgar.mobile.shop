import { PinCode } from '@library/design';
import { SessionAccessCodeInvalidError } from '@library/domain';
import { Icon, useTheme } from '@library/kit';
import { Viewport, useLoaderData, useSubmit } from '@sellgar/app/native';

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BiometricSignInControllerInterface } from '../classes/controller/biometry/biometric-sign-in-controller.interface.ts';
import { SignInByCodeControllerInterface } from '../classes/controller/code/sign-in-by-code-controller.interface.ts';
import { ExitSignInByCodeControllerInterface } from '../classes/controller/exit/exit-sign-in-by-code-controller.interface.ts';
import { createStyles } from './default.styles.ts';

const CODE_LENGTH = 4;

export const SignInByCodeView: React.FC = () => {
  const biometryType = useLoaderData(BiometricSignInControllerInterface);
  const biometricSignIn = useSubmit(BiometricSignInControllerInterface);
  const exit = useSubmit(ExitSignInByCodeControllerInterface);
  const signIn = useSubmit(SignInByCodeControllerInterface);
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const pinCodeRef = React.useRef({ shakeDots: () => undefined });
  const biometricPromptStarted = React.useRef(false);
  const submittedCode = React.useRef<string | null>(null);
  const [code, setCode] = React.useState('');
  const inProcess = biometricSignIn.inProcess || signIn.inProcess;
  const invalidCode = signIn.error instanceof SessionAccessCodeInvalidError;

  React.useEffect(() => {
    if (!biometryType || biometricPromptStarted.current) return;

    biometricPromptStarted.current = true;
    void biometricSignIn();
  }, [biometricSignIn, biometryType]);

  React.useEffect(() => {
    if (invalidCode) pinCodeRef.current.shakeDots();
  }, [invalidCode, signIn.error]);

  React.useEffect(() => {
    if (code.length !== CODE_LENGTH || submittedCode.current === code || inProcess) return;

    submittedCode.current = code;
    setCode('');
    void signIn({ code }).finally(() => {
      submittedCode.current = null;
    });
  }, [code, inProcess, signIn]);

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
          <TouchableOpacity disabled={exit.inProcess || inProcess} onPress={() => void exit()} style={styles.close}>
            <Icon icon="close-fill" style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.content}>
            <PinCode
              dots={dots}
              errorMessage={invalidCode ? 'Неверный код доступа\n' : ''}
              label="Введите код доступа\n"
              loading={inProcess}
              numPadLeftSlot={
                biometryType ? (
                  <TouchableOpacity disabled={inProcess} onPress={() => void biometricSignIn()}>
                    <Icon icon="fingerprint-line" style={styles.numpadIcon} />
                  </TouchableOpacity>
                ) : undefined
              }
              numPadRightSlot={
                code.length > 0 ? (
                  <TouchableOpacity disabled={inProcess} onPress={handleDelete}>
                    <Icon icon="delete-back-2-line" style={styles.numpadIcon} />
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
