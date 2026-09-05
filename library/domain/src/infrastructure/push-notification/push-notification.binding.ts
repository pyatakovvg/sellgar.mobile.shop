import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PushNotificationServiceInterface } from './service/push-notification-service.interface.ts';
import { PushNotificationService } from './service/push-notification.service.ts';

export class PushNotificationBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PushNotificationServiceInterface).to(PushNotificationService);
  }
}
