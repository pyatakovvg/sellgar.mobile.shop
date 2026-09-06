import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { AuthOtpBindings } from './classes/auth-otp.bindings.ts';
import { AuthOtpView } from './view/auth-otp.view.tsx';

@UseBindings(AuthOtpBindings)
@Module({ view: AuthOtpView })
export class AuthOtpModule {}
