export abstract class AuthStorageInterface {
  abstract getAccessToken(): string;
  abstract setAccessToken(value: string): void;
  abstract getRefreshToken(): string;
  abstract setRefreshToken(value: string): void;
  abstract getExpirationDate(): string;
  abstract setExpirationDate(value: string): void;
  abstract checkExpirationDate(): boolean;
  abstract clear(): void;
}
