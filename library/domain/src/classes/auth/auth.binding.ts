import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { AuthGatewayInterface } from './data/gateway/auth-gateway.interface.ts';
import { AuthGateway } from './data/gateway/auth.gateway.ts';
import { AuthServiceInterface } from './application/auth-service.interface.ts';
import { AuthService } from './application/auth.service.ts';
import { AuthStorageInterface } from './data/storage/auth-storage.interface.ts';
import { AuthSecureStorage } from './data/storage/auth-secure.storage.ts';
import { ReidentificationFlowServiceInterface } from './application/reidentification-flow-service.interface.ts';
import { ReidentificationFlowService } from './application/reidentification-flow.service.ts';

export class AuthBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(AuthStorageInterface).to(AuthSecureStorage);
    registry.bind(AuthGatewayInterface).to(AuthGateway);
    registry.bind(AuthServiceInterface).to(AuthService);
    registry.bind(ReidentificationFlowServiceInterface).to(ReidentificationFlowService).inSingletonScope();
  }
}
