import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TOtpVerificationStatus } from './otp-verification-status.type.ts';
import { OtpConfirmationContextEntity } from './otp-confirmation-context.entity.ts';
import { OtpDeliveryContextEntity } from './otp-delivery-context.entity.ts';

export class OtpEntity {
  @IsString()
  verificationStatus: TOtpVerificationStatus;

  @IsString()
  @IsOptional()
  confirmationStatus?: 'rejected' | 'confirmed';

  @IsString()
  @IsOptional()
  resendingStatus?: 'resent' | 'rejected';

  @IsString()
  @IsOptional()
  verificationUuid?: string;

  @Type(() => OtpConfirmationContextEntity)
  @ValidateNested()
  confirmationContext: OtpConfirmationContextEntity;

  @Type(() => OtpDeliveryContextEntity)
  @ValidateNested()
  deliveryContext: OtpDeliveryContextEntity;
}
