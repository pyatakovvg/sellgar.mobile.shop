import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { PasswordSetBindings } from './classes/password-set.bindings.ts';
import { PasswordSetView } from './view/password-set.view.tsx';

@UseBindings(PasswordSetBindings)
@Module({ view: PasswordSetView })
export class PasswordSetModule {}
