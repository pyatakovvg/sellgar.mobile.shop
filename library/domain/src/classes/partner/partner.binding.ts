import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PartnerGatewayInterface } from './data/gateway/partner-gateway.interface.ts';
import { PartnerGateway } from './data/gateway/partner.gateway.ts';
import { PartnerServiceInterface } from './application/partner-service.interface.ts';
import { PartnerService } from './application/partner.service.ts';

export class PartnerBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PartnerGatewayInterface).to(PartnerGateway);
    registry.bind(PartnerServiceInterface).to(PartnerService);
  }
}
