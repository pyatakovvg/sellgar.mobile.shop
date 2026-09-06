import { OtpAttemptsExceededError, OtpExpiredError, OtpServiceInterface, type OtpEntity } from '@library/domain';
import { Controller, Inject, UserRequestServiceInterface } from '@sellgar/app';

import { OtpResendControllerInterface } from './otp-resend-controller.interface.ts';

@Controller()
export class OtpResendController extends OtpResendControllerInterface {
  constructor(
    @Inject(OtpServiceInterface)
    private readonly otpService: OtpServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async action({ payload, props }: Parameters<OtpResendControllerInterface['action']>[0]): Promise<OtpEntity> {
    let result: OtpEntity;

    try {
      result = await this.otpService.resend(payload.token);
    } catch (error) {
      if (error instanceof OtpAttemptsExceededError || error instanceof OtpExpiredError) {
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
