import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PasswordGatewayInterface } from './data/gateway/password-gateway.interface.ts';
import { PasswordGateway } from './data/gateway/password.gateway.ts';
import { PasswordServiceInterface } from './application/password-service.interface.ts';
import { PasswordService } from './application/password.service.ts';

export class PasswordBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PasswordGatewayInterface).to(PasswordGateway);
    registry.bind(PasswordServiceInterface).to(PasswordService);
  }
}
