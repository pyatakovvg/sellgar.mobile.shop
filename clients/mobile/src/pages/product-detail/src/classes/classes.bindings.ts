import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ProductDetailControllerInterface } from './controller/product-detail/product-detail-controller.interface.ts';
import { ProductDetailController } from './controller/product-detail/product-detail.controller.ts';

export class ProductDetailBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(ProductDetailControllerInterface).to(ProductDetailController);
  }
}
