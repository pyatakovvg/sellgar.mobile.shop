import { Inject, Injectable } from '@sellgar/app';

import { OtpEntity } from '../domain/otp.entity.ts';
import { OtpAttemptsExceededError } from './error/otp-attempts-exceeded.error.ts';
import { OtpExpiredError } from './error/otp-expired.error.ts';
import { OtpInvalidCodeError } from './error/otp-invalid-code.error.ts';

import { OtpServiceInterface } from './otp-service.interface.ts';
import { OtpGatewayInterface } from '../data/gateway/otp-gateway.interface.ts';

@Injectable()
export class OtpService implements OtpServiceInterface {
  constructor(@Inject(OtpGatewayInterface) private readonly authGateway: OtpGatewayInterface) {}

  async resend(otpToken: string): Promise<OtpEntity> {
    const result = await this.authGateway.resend(otpToken);
    if (result.data.confirmationStatus === 'rejected') {
      switch (result.data.verificationStatus) {
        case 'attemptsExceeded':
          throw new OtpAttemptsExceededError();
        case 'expired':
          throw new OtpExpiredError();
        default:
          return result.data;
      }
    }
    return result.data;
  }

  async confirm(otpCode: string, otpToken: string): Promise<OtpEntity> {
    const result = await this.authGateway.confirm(otpCode, otpToken);
    if (result.data.confirmationStatus === 'rejected') {
      switch (result.data.verificationStatus) {
        case 'attemptsExceeded':
          throw new OtpAttemptsExceededError();
        case 'expired':
          throw new OtpExpiredError();
        case 'pending':
          throw new OtpInvalidCodeError();
        default:
          return result.data;
      }
    }
    return result.data;
  }

  async getOtp(otpToken: string): Promise<OtpEntity> {
    const result = await this.authGateway.getOtp(otpToken);
    if (result.data.confirmationStatus === 'rejected') {
      switch (result.data.verificationStatus) {
        case 'attemptsExceeded':
          throw new OtpAttemptsExceededError();
        case 'expired':
          throw new OtpExpiredError();
        case 'pending':
          throw new OtpInvalidCodeError();
        default:
          return result.data;
      }
    }
    return result.data;
  }
}
