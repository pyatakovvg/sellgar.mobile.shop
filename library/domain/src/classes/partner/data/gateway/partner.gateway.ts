import { Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PartnerGatewayInterface } from './partner-gateway.interface.ts';
import partners from './partners.json';

import { PartnerEntity } from '../../domain/partner.entity.ts';

@Injectable()
export class PartnerGateway implements PartnerGatewayInterface {
  async getAll(): Promise<PartnerEntity[]> {
    const resultInstances = plainToInstance(PartnerEntity, partners);

    for (let resultInstance of resultInstances) {
      await validateOrReject(resultInstance);
    }

    return resultInstances;
  }
}
