import { HttpException, Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { SignUpGatewayInterface } from '../data/gateway/sign-up-gateway.interface.ts';

import { ConfirmSignUpResultEntity } from '../domain/confirm-sign-up-result.entity.ts';
import { RequestSignUpResultEntity } from '../domain/request-sign-up-result.entity.ts';
import { CreationRequestSignUpResultEntity } from '../domain/creation-request-sign-up-result.entity.ts';

import { SignUpServiceInterface } from './sign-up-service.interface.ts';
import { SignUpPollingAttemptsExceededError } from './error/sign-up-polling-attempts-exceeded.error.ts';
import { OtpAttemptsExceededError, OtpInvalidCodeError } from '../../otp';

@Injectable()
export class SignUpService implements SignUpServiceInterface {
  constructor(@Inject(SignUpGatewayInterface) private readonly signUpGateway: SignUpGatewayInterface) {}

  async signUp(phone: string, code: string, token: string, requestUuid: string): Promise<ConfirmSignUpResultEntity> {
    const result = await this.signUpGateway.signUp(phone, code, token, requestUuid);
    const instanceResult = plainToInstance(ConfirmSignUpResultEntity, result);

    await validateOrReject(instanceResult);

    const confirmationResult = instanceResult.data.confirmationResult;
    if (confirmationResult !== 'confirmed') {
      if (confirmationResult === 'attemptsexceeded') {
        throw new OtpAttemptsExceededError();
      }
      if (confirmationResult === 'invalidcode') {
        throw new OtpInvalidCodeError();
      }
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

  async requestSmsCode(phone: string, requestUuid: string) {
    const result = await this.signUpGateway.requestSmsCode(phone, requestUuid);

    const instanceResult = plainToInstance(RequestSignUpResultEntity, result);

    await validateOrReject(instanceResult);

    return instanceResult;
  }

  async checkCreationRequest(requestUuid: string): Promise<CreationRequestSignUpResultEntity> {
    const attempts = 10;

    for (let attempt = 0; attempt < attempts; attempt++) {
      const result = await this.signUpGateway.checkCreationRequest(requestUuid);
      const instanceResult = plainToInstance(CreationRequestSignUpResultEntity, result);

      await validateOrReject(instanceResult);

      if (instanceResult.data.status !== 'processing') {
        return instanceResult;
      }

      if (attempt < attempts - 1) {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      }
    }

    throw new SignUpPollingAttemptsExceededError();
  }
}
