import { Inject, Injectable } from '@sellgar/app';

import { FeaturesServiceInterface } from './features-service.interface.ts';
import { FeaturesGatewayInterface } from '../data/gateway/features-gateway.interface.ts';

@Injectable()
export class FeaturesService implements FeaturesServiceInterface {
  constructor(@Inject(FeaturesGatewayInterface) private readonly featuresGateway: FeaturesGatewayInterface) {}

  get() {
    return this.featuresGateway.get();
  }
}
