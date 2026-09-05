export abstract class SessionStorageInterface {
  abstract getSessionUuid(): string;
  abstract getUserUuid(): string;
  abstract getHashCode(): string;

  abstract setSessionUuid(value: string): void;
  abstract setUserUuid(value: string): void;
  abstract setHashCode(value: string): void;

  abstract deleteSessionUuid(): void;
  abstract deleteUserUuid(): void;
  abstract deleteHashCode(): void;

  abstract clear(): void;
}
