import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { CheckPhoneBindings } from './classes/check-phone.bindings.ts';
import { CheckPhoneView } from './view/check-phone.view.tsx';

@UseBindings(CheckPhoneBindings)
@Module({ view: CheckPhoneView })
export class CheckPhoneModule {}
