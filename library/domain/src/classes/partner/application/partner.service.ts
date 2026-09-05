import { Inject, Injectable } from '@sellgar/app';

import { PartnerServiceInterface } from './partner-service.interface.ts';
import { PartnerGatewayInterface } from '../data/gateway/partner-gateway.interface.ts';

@Injectable()
export class PartnerService implements PartnerServiceInterface {
  constructor(@Inject(PartnerGatewayInterface) private readonly operationGateway: PartnerGatewayInterface) {}

  async getAll() {
    return this.operationGateway.getAll();
  }
}
