import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { ProductDetailBindings } from './classes/classes.bindings.ts';
import { ModuleView } from './view/module.view.tsx';

@UseBindings(ProductDetailBindings)
@Module({ view: ModuleView })
export class ProductDetailModule {}
