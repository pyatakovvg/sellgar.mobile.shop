import type { IdentificationInput } from '../data/gateway/input/identification.input.ts';

import { IdentificationResultEntity } from '../domain/identification-result.entity.ts';
import { IdentificationRequestEntity } from '../domain/identification-request.entity.ts';

export abstract class IdentificationServiceInterface {
  abstract liveness(requestUuid: string): Promise<IdentificationResultEntity>;
  abstract rollback(requestUuid: string): Promise<IdentificationResultEntity>;
  abstract sendToIdentification(dto: IdentificationInput): Promise<IdentificationResultEntity>;
  abstract createIdentificationRequest(): Promise<IdentificationRequestEntity>;
}
