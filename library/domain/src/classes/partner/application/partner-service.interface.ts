import { PartnerEntity } from '../domain/partner.entity.ts';

export abstract class PartnerServiceInterface {
  abstract getAll(): Promise<PartnerEntity[]>;
}
