import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { SignUpGatewayInterface } from './data/gateway/sign-up-gateway.interface.ts';
import { SignUpGateway } from './data/gateway/sign-up.gateway.ts';
import { SignUpServiceInterface } from './application/sign-up-service.interface.ts';
import { SignUpService } from './application/sign-up.service.ts';

export class SignUpBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(SignUpGatewayInterface).to(SignUpGateway);
    registry.bind(SignUpServiceInterface).to(SignUpService);
  }
}
