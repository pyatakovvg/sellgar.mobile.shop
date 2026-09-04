import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { BrandCreateBindings } from './classes/classes.bindings.ts';
import { ModuleView } from './view/module.view.tsx';

@UseBindings(BrandCreateBindings)
@Module({ view: ModuleView })
export class BrandCreateModule {}
