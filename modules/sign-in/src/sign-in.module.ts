import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { SignInView } from './view';
import { SignInBinding } from './classes/sign-in.binding.ts';

@UseBindings(SignInBinding)
@Module({
  view: SignInView,
})
export class SignInModule {}
