export abstract class SessionUnlockUsecaseInterface {
  abstract available(): boolean;
  abstract execute(code: string): Promise<void>;
}
