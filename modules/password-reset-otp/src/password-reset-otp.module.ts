import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { PasswordResetOtpBindings } from './classes/password-reset-otp.bindings.ts';
import { PasswordResetOtpView } from './view/password-reset-otp.view.tsx';

@UseBindings(PasswordResetOtpBindings)
@Module({ view: PasswordResetOtpView })
export class PasswordResetOtpModule {}
