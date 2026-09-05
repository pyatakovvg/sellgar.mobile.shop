import { RequestPasswordResetResultEntity } from '../domain/request-password-reset-result.entity.ts';
import { ConfirmPasswordResetResultEntity } from '../domain/confirm-password-reset-result.entity.ts';
import { StatusPasswordResetResultEntity } from '../domain/status-password-reset-result.entity.ts';

export abstract class PasswordServiceInterface {
  abstract requestSmsCode(phone: string, requestUuid: string): Promise<RequestPasswordResetResultEntity>;
  abstract phoneConfirm(
    phone: string,
    code: string,
    token: string,
    requestUuid: string,
  ): Promise<ConfirmPasswordResetResultEntity>;
  abstract waitResetFinalStatus(requestUuid: string, count?: number): Promise<StatusPasswordResetResultEntity>;
}
