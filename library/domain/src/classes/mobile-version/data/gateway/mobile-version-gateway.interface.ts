import { MobileVersionCheckDto } from './dto/mobile-version-check.dto.ts';

import { MobileVersionResultEntity } from '../../domain/mobile-version-result.entity.ts';

export abstract class MobileVersionGatewayInterface {
  abstract check(dto: MobileVersionCheckDto): Promise<MobileVersionResultEntity>;
}
