import { Inject, Injectable } from '@sellgar/app';

import { ChangePhoneServiceInterface } from './change-phone-service.interface.ts';
import { ChangePhoneGatewayInterface } from '../data/gateway/change-phone-gateway.interface.ts';
import type { ChangePhoneInput } from '../data/gateway/input/change-phone.input.ts';

@Injectable()
export class ChangePhoneService implements ChangePhoneServiceInterface {
  constructor(@Inject(ChangePhoneGatewayInterface) private readonly changePhoneGateway: ChangePhoneGatewayInterface) {}

  initiate(params: ChangePhoneInput) {
    return this.changePhoneGateway.initiate(params);
  }

  getStatus(uuid: string) {
    return this.changePhoneGateway.getStatus(uuid);
  }
}
