import { ConfirmSignUpResultEntity } from '../domain/confirm-sign-up-result.entity.ts';
import { RequestSignUpResultEntity } from '../domain/request-sign-up-result.entity.ts';
import { CreationRequestSignUpResultEntity } from '../domain/creation-request-sign-up-result.entity.ts';

export abstract class SignUpServiceInterface {
  abstract signUp(phone: string, code: string, token: string, requestUuid: string): Promise<ConfirmSignUpResultEntity>;
  abstract requestSmsCode(phone: string, requestUuid: string): Promise<RequestSignUpResultEntity>;
  abstract checkCreationRequest(requestUuid: string): Promise<CreationRequestSignUpResultEntity>;
}
