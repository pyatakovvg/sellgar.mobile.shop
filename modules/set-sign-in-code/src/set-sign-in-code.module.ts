import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { SetSignInCodeBindings } from './classes/set-sign-in-code.bindings.ts';
import { SetSignInCodeView } from './view/set-sign-in-code.view.tsx';

@UseBindings(SetSignInCodeBindings)
@Module({ view: SetSignInCodeView })
export class SetSignInCodeModule {}
