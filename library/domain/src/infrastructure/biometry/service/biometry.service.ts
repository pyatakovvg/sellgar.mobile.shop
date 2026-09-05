import { Injectable } from '@sellgar/app';
import { Platform } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import { BiometryServiceInterface } from './biometry-service.interface.ts';

@Injectable()
export class BiometryService implements BiometryServiceInterface {
  private readonly instance = new ReactNativeBiometrics({ allowDeviceCredentials: true });

  async available() {
    try {
      const result = await this.instance.isSensorAvailable();

      return result.available;
    } catch {
      return false;
    }
  }

  async getBiometrySignature(promptMessage?: string) {
    try {
      const { keysExist } = await this.instance.biometricKeysExist();

      if (!keysExist) {
        await this.instance.createKeys();
      }

      const result = await this.instance.createSignature({
        promptMessage:
          promptMessage ||
          `Разрешить приложению вход по ${Platform.select({ ios: 'FaceID', android: 'биометрии', default: 'биометрии' })}?`,
        payload: 'test',
      });

      if (result.success && result.signature) {
        return result.signature;
      }
      return '';
    } catch (error) {
      return '';
    }
  }

  async getAvailableType() {
    const { available, biometryType } = await this.instance.isSensorAvailable();
    if (!available || !biometryType) return null;

    return biometryType;
  }
}
