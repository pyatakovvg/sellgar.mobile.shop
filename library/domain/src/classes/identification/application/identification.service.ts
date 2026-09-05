import { Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { IdentificationServiceInterface } from './identification-service.interface.ts';
import { IdentificationGatewayInterface } from '../data/gateway/identification-gateway.interface.ts';

import type { IdentificationInput } from '../data/gateway/input/identification.input.ts';
import { IdentificationRequestEntity } from '../domain/identification-request.entity.ts';

@Injectable()
export class IdentificationService implements IdentificationServiceInterface {
  constructor(
    @Inject(IdentificationGatewayInterface) private readonly identificationGateway: IdentificationGatewayInterface,
  ) {}

  async sendToIdentification(dto: IdentificationInput) {
    return await this.identificationGateway.sendToIdentification(dto);
  }

  async liveness(requestUuid: string) {
    return await this.identificationGateway.liveness(requestUuid);
  }

  async rollback(requestUuid: string) {
    return this.identificationGateway.rollback(requestUuid);
  }

  async createIdentificationRequest() {
    const identification = await this.identificationGateway.createIdentification();
    const requestUuid = identification.data.uuid;
    const questionnaire = await this.identificationGateway.getQuestionnaire(requestUuid);
    const questionnaireWithoutNulls = Object.fromEntries(
      Object.entries(questionnaire.data).filter(([, value]) => value !== null),
    );
    const identificationRequest = plainToInstance(IdentificationRequestEntity, {
      requestUuid,
      questionnaire: questionnaireWithoutNulls,
    });

    await validateOrReject(identificationRequest);

    return identificationRequest;
  }
}
