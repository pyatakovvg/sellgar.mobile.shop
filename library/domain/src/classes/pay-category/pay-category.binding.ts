import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PayCategoryGatewayInterface } from './data/gateway/pay-category-gateway.interface.ts';
import { PayCategoryGateway } from './data/gateway/pay-category.gateway.ts';
import { PayCategoryServiceInterface } from './application/pay-category-service.interface.ts';
import { PayCategoryService } from './application/pay-category.service.ts';

export class PayCategoryBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PayCategoryGatewayInterface).to(PayCategoryGateway);
    registry.bind(PayCategoryServiceInterface).to(PayCategoryService);
  }
}
