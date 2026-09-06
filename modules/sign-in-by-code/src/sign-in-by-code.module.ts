import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { SignInByCodeBindings } from './classes/sign-in-by-code.bindings.ts';
import { SignInByCodeView } from './view/sign-in-by-code.view.tsx';

@UseBindings(SignInByCodeBindings)
@Module({ view: SignInByCodeView })
export class SignInByCodeModule {}
