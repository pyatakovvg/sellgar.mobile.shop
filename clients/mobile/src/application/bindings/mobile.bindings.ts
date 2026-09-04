import {
  BindingModuleInterface,
  SessionExpirationNotifierInterface,
  type BindingRegistryInterface,
} from '@sellgar/app';

import { SessionExpirationNotifier } from '../session-expiration-notifier.ts';

export class MobileBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(SessionExpirationNotifierInterface).to(SessionExpirationNotifier).inSingletonScope();
  }
}
