import {
  OtpAttemptsExceededError,
  OtpExpiredError,
  OtpInvalidCodeError,
  OtpServiceInterface,
  type OtpEntity,
} from '@library/domain';
import { Controller, Inject, UserRequestServiceInterface } from '@sellgar/app';

import { OtpConfirmControllerInterface } from './otp-confirm-controller.interface.ts';

@Controller()
export class OtpConfirmController extends OtpConfirmControllerInterface {
  constructor(
    @Inject(OtpServiceInterface)
    private readonly otpService: OtpServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async action({ payload, props }: Parameters<OtpConfirmControllerInterface['action']>[0]): Promise<OtpEntity> {
    let result: OtpEntity;

    try {
      result = await this.otpService.confirm(payload.code, payload.token);
    } catch (error) {
      if (isOtpInputError(error)) {
        throw error;
      }

      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Что-то пошло не так',
      });
      throw error;
    }

    if (result.verificationStatus === 'confirmed') {
      await props.onSuccess();
    }

    return result;
  }
}

const isOtpInputError = (error: unknown): error is OtpAttemptsExceededError | OtpExpiredError | OtpInvalidCodeError => {
  return (
    error instanceof OtpAttemptsExceededError ||
    error instanceof OtpExpiredError ||
    error instanceof OtpInvalidCodeError
  );
};
