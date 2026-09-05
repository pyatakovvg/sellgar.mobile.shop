import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { OtpGatewayInterface } from './data/gateway/otp-gateway.interface.ts';
import { OtpGateway } from './data/gateway/otp.gateway.ts';
import { OtpServiceInterface } from './application/otp-service.interface.ts';
import { OtpService } from './application/otp.service.ts';

export class OtpBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(OtpGatewayInterface).to(OtpGateway);
    registry.bind(OtpServiceInterface).to(OtpService);
  }
}
