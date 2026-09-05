export abstract class StorageServiceInterface {
  abstract setItem(key: string, value: string): void;
  abstract getItem(key: string): string;
  abstract deleteItem(key: string): void;
  abstract clearAll(): void;
  abstract hasItem(key: string): boolean;
}
