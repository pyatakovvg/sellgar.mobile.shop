import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { BrandsPaginationControllerInterface } from './controller/brands-pagination/brands-pagination-controller.interface.ts';
import { BrandsPaginationController } from './controller/brands-pagination/brands-pagination.controller.ts';
import { BrandsControllerInterface } from './controller/brands/brands-controller.interface.ts';
import { BrandsController } from './controller/brands/brands.controller.ts';

export class BrandsBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(BrandsControllerInterface).to(BrandsController);
    registry.bind(BrandsPaginationControllerInterface).to(BrandsPaginationController);
  }
}
