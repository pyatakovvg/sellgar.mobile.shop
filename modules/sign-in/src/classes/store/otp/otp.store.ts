import { OtpEntity } from '@library/domain';

import { Injectable } from '@sellgar/app';
import { observable, action, makeAutoObservable } from 'mobx';

import { OtpStoreInterface } from './otp-store.interface.ts';

@Injectable()
export class OtpStore implements OtpStoreInterface {
  @observable data: OtpEntity;
  @observable phone: string;

  constructor() {
    makeAutoObservable(this);
  }

  @action.bound
  execute(otpData: OtpEntity, phone: string) {
    this.data = otpData;
    this.phone = phone;
  }
}
