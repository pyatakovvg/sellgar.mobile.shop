import { TBiometry } from './biometry.type.ts';

export abstract class BiometryServiceInterface {
  abstract available(): Promise<boolean>;
  abstract getBiometrySignature(promptMessage?: string): Promise<string>;
  abstract getAvailableType(): Promise<TBiometry | null>;
}
