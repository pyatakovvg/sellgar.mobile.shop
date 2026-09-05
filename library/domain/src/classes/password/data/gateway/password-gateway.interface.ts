export abstract class PasswordGatewayInterface {
  abstract requestSmsCode(phone: string, requestUuid: string): Promise<any>;
  abstract phoneConfirm(phone: string, code: string, token: string, requestUuid: string): Promise<any>;
  abstract checkStatus(requestUuid: string): Promise<any>;
}
