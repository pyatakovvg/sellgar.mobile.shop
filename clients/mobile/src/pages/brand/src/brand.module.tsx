import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { BrandBindings } from './classes/classes.bindings.ts';
import { ModuleView } from './view/module.view.tsx';

@UseBindings(BrandBindings)
@Module({ view: ModuleView })
export class BrandModule {}
