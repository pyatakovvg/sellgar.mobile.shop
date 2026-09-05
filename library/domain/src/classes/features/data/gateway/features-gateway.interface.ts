import { FeaturesResultEntity } from '../../domain/features-result.entity.ts';

export abstract class FeaturesGatewayInterface {
  abstract get(): Promise<FeaturesResultEntity>;
}
