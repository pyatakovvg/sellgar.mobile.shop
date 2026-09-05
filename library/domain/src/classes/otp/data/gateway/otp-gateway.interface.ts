import { OtpResultEntity } from '../../domain/otp-result.entity.ts';

export abstract class OtpGatewayInterface {
  abstract resend(otpToken: string): Promise<OtpResultEntity>;
  abstract confirm(code: string, otpToken: string): Promise<OtpResultEntity>;
  abstract getOtp(otpToken: string): Promise<OtpResultEntity>;
}
