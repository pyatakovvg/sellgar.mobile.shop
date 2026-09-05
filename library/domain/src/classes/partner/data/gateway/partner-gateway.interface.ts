import { PartnerEntity } from '../../domain/partner.entity.ts';

export abstract class PartnerGatewayInterface {
  abstract getAll(): Promise<PartnerEntity[]>;
}
