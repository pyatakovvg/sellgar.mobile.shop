import { FeaturesResultEntity } from '../domain/features-result.entity.ts';

export abstract class FeaturesServiceInterface {
  abstract get(): Promise<FeaturesResultEntity>;
}
