import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { ReidentificationBindings } from './classes/reidentification.bindings.ts';
import { ReidentificationView } from './view/reidentification.view.tsx';

@UseBindings(ReidentificationBindings)
@Module({ view: ReidentificationView })
export class ReidentificationModule {}
