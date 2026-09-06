export abstract class AccessCodeStoreInterface {
  abstract get value(): string | null;
  abstract clear(): void;
  abstract set(value: string): void;
}
