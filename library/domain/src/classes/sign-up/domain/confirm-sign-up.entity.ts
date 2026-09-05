import { IsString } from 'class-validator';

import { SignUpConfirmationResult } from './sign-up-confirmation-result.type.ts';

export class ConfirmSignUpEntity {
  @IsString()
  confirmationResult: SignUpConfirmationResult;
}
