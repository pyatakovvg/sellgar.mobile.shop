import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { BrandsBindings } from './classes/classes.bindings.ts';
import { ModuleView } from './view/module.view.tsx';

@UseBindings(BrandsBindings)
@Module({ view: ModuleView })
export class BrandsModule {}
