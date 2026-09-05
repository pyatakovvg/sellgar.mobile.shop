import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { SessionGatewayInterface } from './data/gateway/session-gateway.interface.ts';
import { SessionGateway } from './data/gateway/session.gateway.ts';
import { SessionServiceInterface } from './application/session-service.interface.ts';
import { SessionService } from './application/session.service.ts';
import { SessionCreateUsecaseInterface } from './application/session-create-usecase.interface.ts';
import { SessionCreateUsecase } from './application/session-create.usecase.ts';
import { SessionLogoutUsecaseInterface } from './application/session-logout-usecase.interface.ts';
import { SessionLogoutUsecase } from './application/session-logout.usecase.ts';
import { ClearAuthUserDataUsecaseInterface } from './application/clear-auth-user-data-usecase.interface.ts';
import { ClearAuthUserDataUsecase } from './application/clear-auth-user-data.usecase.ts';
import { SessionRestoreUsecaseInterface } from './application/session-restore-usecase.interface.ts';
import { SessionRestoreUsecase } from './application/session-restore.usecase.ts';
import { SessionStorageInterface } from './data/storage/session-storage.interface.ts';
import { SessionSecureStorage } from './data/storage/session-secure.storage.ts';

export class SessionBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(SessionStorageInterface).to(SessionSecureStorage);
    registry.bind(SessionGatewayInterface).to(SessionGateway);
    registry.bind(SessionServiceInterface).to(SessionService);
    registry.bind(SessionCreateUsecaseInterface).to(SessionCreateUsecase);
    registry.bind(SessionLogoutUsecaseInterface).to(SessionLogoutUsecase);
    registry.bind(ClearAuthUserDataUsecaseInterface).to(ClearAuthUserDataUsecase);
    registry.bind(SessionRestoreUsecaseInterface).to(SessionRestoreUsecase);
  }
}
