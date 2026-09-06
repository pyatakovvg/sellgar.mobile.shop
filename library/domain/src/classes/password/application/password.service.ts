import { HttpException, Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PasswordPollingAttemptsExceededError } from './error/password-polling-attempts-exceeded.error.ts';

import { PasswordGatewayInterface } from '../data/gateway/password-gateway.interface.ts';

import { ConfirmPasswordResetResultEntity } from '../domain/confirm-password-reset-result.entity.ts';
import { RequestPasswordResetResultEntity } from '../domain/request-password-reset-result.entity.ts';
import { StatusPasswordResetResultEntity } from '../domain/status-password-reset-result.entity.ts';

import { type PasswordServiceInterface } from './password-service.interface.ts';

@Injectable()
export class PasswordService implements PasswordServiceInterface {
  constructor(@Inject(PasswordGatewayInterface) private readonly passwordGateway: PasswordGatewayInterface) {}

  async requestSmsCode(phone: string, requestUuid: string) {
    const result = await this.passwordGateway.requestSmsCode(phone, requestUuid);
    const instanceResult = plainToInstance(RequestPasswordResetResultEntity, result);

    await validateOrReject(instanceResult);

    return instanceResult;
  }

  async phoneConfirm(phone: string, code: string, token: string, requestUuid: string) {
    const result = await this.passwordGateway.phoneConfirm(phone, code, token, requestUuid);
    const instanceResult = plainToInstance(ConfirmPasswordResetResultEntity, result);

    await validateOrReject(instanceResult);

    if (instanceResult.data.confirmationResult !== 'confirmed') {
      throw new HttpException(
        {
          success: true,
          error: {
            code: instanceResult.data.confirmationResult,
          },
          meta: instanceResult.meta,
        },
        500,
      );
    }

    return instanceResult;
  }

  async waitResetFinalStatus(requestUuid: string, count: number = 10) {
    for (let attempt = 0; attempt < count; attempt++) {
      const result = await this.passwordGateway.checkStatus(requestUuid);

      if (result.data && result.data.status === 'succeeded') {
        const instanceResult = plainToInstance(StatusPasswordResetResultEntity, result);
        await validateOrReject(instanceResult);

        return instanceResult;
      }

      if (attempt < count - 1) {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      }
    }

    throw new PasswordPollingAttemptsExceededError();
  }
}
