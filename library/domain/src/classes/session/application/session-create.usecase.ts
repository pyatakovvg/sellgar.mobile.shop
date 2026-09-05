import { sha256 } from '@utils/generate';

import { Inject, Injectable } from '@sellgar/app';

import { BiometryServiceInterface } from '../../../infrastructure/biometry';
import { DeviceInfoServiceInterface } from '../../../infrastructure/device-info';
import { ProfileServiceInterface } from '../../profile';
import { SessionStorageInterface } from '../data/storage/session-storage.interface.ts';

import { SessionCreateUsecaseInterface } from './session-create-usecase.interface.ts';
import { SessionServiceInterface } from './session-service.interface.ts';

@Injectable()
export class SessionCreateUsecase implements SessionCreateUsecaseInterface {
  constructor(
    @Inject(BiometryServiceInterface) private readonly biometryService: BiometryServiceInterface,
    @Inject(SessionStorageInterface) private readonly sessionStorage: SessionStorageInterface,
    @Inject(ProfileServiceInterface) private readonly profileService: ProfileServiceInterface,
    @Inject(SessionServiceInterface) private readonly sessionService: SessionServiceInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceInfoService: DeviceInfoServiceInterface,
  ) {}

  async execute(code: string) {
    try {
      const isBiometryAvailable = await this.biometryService.available();
      if (isBiometryAvailable) {
        await this.biometryService.getBiometrySignature();
      }
    } catch (error) {
      console.log(error);
    }

    const { data: profileData } = await this.profileService.get();

    const deviceName = this.deviceInfoService.getDeviceName();
    const shaCode = await sha256(code);
    const fingerprint = await this.deviceInfoService.getFingerprint(shaCode);

    const { uuid } = await this.sessionService.create({ deviceName, fingerprint });

    this.sessionStorage.setSessionUuid(uuid);
    this.sessionStorage.setUserUuid(profileData.uuid);
    this.sessionStorage.setHashCode(shaCode);

    this.deviceInfoService.updateClientDeviceSalt();
  }
}
