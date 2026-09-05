import type { IdentificationInput } from './input/identification.input.ts';

import { IdentificationResultEntity } from '../../domain/identification-result.entity.ts';
import { CreateIdentificationResultEntity } from '../../domain/create-identification-result.entity.ts';
import { QuestionnaireResultEntity } from '../../domain/questionnaire-result.entity.ts';

export abstract class IdentificationGatewayInterface {
  abstract liveness(requestUuid: string): Promise<IdentificationResultEntity>;
  abstract rollback(requestUuid: string): Promise<IdentificationResultEntity>;
  abstract sendToIdentification(dto: IdentificationInput): Promise<IdentificationResultEntity>;
  abstract createIdentification(): Promise<CreateIdentificationResultEntity>;
  abstract getQuestionnaire(requestUuid: string): Promise<QuestionnaireResultEntity>;
}
