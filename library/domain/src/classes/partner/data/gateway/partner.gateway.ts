import { Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PartnerGatewayInterface } from './partner-gateway.interface.ts';

import { PartnerEntity } from '../../domain/partner.entity.ts';

@Injectable()
export class PartnerGateway implements PartnerGatewayInterface {
  async getAll(): Promise<PartnerEntity[]> {
    const result = (await import('./partners.json')).default;
    const resultInstances = plainToInstance(PartnerEntity, result);

    for (let resultInstance of resultInstances) {
      await validateOrReject(resultInstance);
    }

    return resultInstances;
  }
}
