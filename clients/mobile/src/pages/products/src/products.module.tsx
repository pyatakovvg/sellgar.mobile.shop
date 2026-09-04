import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { ProductsBindings } from './classes/classes.bindings.ts';
import { ModuleView } from './view/module.view.tsx';

@UseBindings(ProductsBindings)
@Module({ view: ModuleView })
export class ProductsModule {}
