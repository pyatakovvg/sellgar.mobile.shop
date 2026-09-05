import { OtpEntity } from '../domain/otp.entity.ts';

export abstract class OtpServiceInterface {
  abstract resend(otpToken: string): Promise<OtpEntity>;
  abstract confirm(code: string, otpToken: string): Promise<OtpEntity>;
  abstract getOtp(otpToken: string): Promise<OtpEntity>;
}
