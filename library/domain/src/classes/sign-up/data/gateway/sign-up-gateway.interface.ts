export abstract class SignUpGatewayInterface {
  abstract requestSmsCode(phone: string, requestUuid: string): Promise<any>;
  abstract signUp(phone: string, code: string, token: string, requestUuid: string): Promise<any>;
  abstract checkCreationRequest(requestUuid: string): Promise<any>;
}
