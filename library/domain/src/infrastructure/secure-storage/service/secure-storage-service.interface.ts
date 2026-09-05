export abstract class SecureStorageServiceInterface {
  abstract setItem(key: string, value: string): void;
  abstract getItem(key: string): string;
  abstract deleteItem(key: string): void;
  abstract clearAll(): void;
  abstract hasItem(key: string): boolean;
}
