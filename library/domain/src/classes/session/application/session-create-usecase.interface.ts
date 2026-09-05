export abstract class SessionCreateUsecaseInterface {
  abstract execute(code: string): Promise<void>;
}
