import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ChangePhoneGatewayInterface } from './data/gateway/change-phone-gateway.interface.ts';
import { ChangePhoneGateway } from './data/gateway/change-phone.gateway.ts';
import { ChangePhoneServiceInterface } from './application/change-phone-service.interface.ts';
import { ChangePhoneService } from './application/change-phone.service.ts';

export class ChangePhoneBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(ChangePhoneGatewayInterface).to(ChangePhoneGateway);
    registry.bind(ChangePhoneServiceInterface).to(ChangePhoneService);
  }
}
