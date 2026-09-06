import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { ReidentificationConfirmBindings } from './classes/reidentification-confirm.bindings.ts';
import { ReidentificationConfirmView } from './view/reidentification-confirm.view.tsx';

@UseBindings(ReidentificationConfirmBindings)
@Module({ view: ReidentificationConfirmView })
export class ReidentificationConfirmModule {}
