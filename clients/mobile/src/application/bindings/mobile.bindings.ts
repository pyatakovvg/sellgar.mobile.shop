import {
  BindingModuleInterface,
  SessionExpirationNotifierInterface,
  type BindingRegistryInterface,
} from '@sellgar/app';
import { DomainBinding } from '@library/domain';

import { SessionExpirationNotifier } from '../session-expiration-notifier.ts';

export class MobileBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    new DomainBinding().register(registry);
    registry.bind(SessionExpirationNotifierInterface).to(SessionExpirationNotifier).inSingletonScope();
  }
}
