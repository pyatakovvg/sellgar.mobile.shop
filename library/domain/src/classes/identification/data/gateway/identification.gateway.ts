import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';

import { IdentificationGatewayInterface } from './identification-gateway.interface.ts';

import type { IdentificationInput } from './input/identification.input.ts';
import { IdentificationDto } from './dto/identification.dto.ts';

import { IdentificationResultEntity } from '../../domain/identification-result.entity.ts';
import { CreateIdentificationResultEntity } from '../../domain/create-identification-result.entity.ts';
import { QuestionnaireResultEntity } from '../../domain/questionnaire-result.entity.ts';

@Injectable()
export class IdentificationGateway implements IdentificationGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async sendToIdentification(dto: IdentificationInput) {
    const requestDto = plainToInstance(IdentificationDto, dto);
    await validateOrReject(requestDto);

    const result = await this.requestExecutor.run(
      { scope: `identification:check:${dto.requestUuid}` },
      async ({ signal }) => {
        const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
        return request.post(this.config.get('GATEWAY_HOST_API') + '/kyc/' + dto.requestUuid + '/check', {
          checkData: requestDto,
        });
      },
    );
    const resultInstance = plainToInstance(IdentificationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async liveness(requestUuid: string) {
    const result = await this.requestExecutor.run(
      { scope: `identification:liveness:${requestUuid}` },
      async ({ signal }) => {
        const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
        return request.post(this.config.get('GATEWAY_HOST_API') + '/kyc/' + requestUuid + '/liveness', {});
      },
    );
    const resultInstance = plainToInstance(IdentificationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async rollback(requestUuid: string) {
    const result = await this.requestExecutor.run(
      { scope: `identification:rollback:${requestUuid}` },
      async ({ signal }) => {
        const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
        return request.post(this.config.get('GATEWAY_HOST_API') + '/kyc/' + requestUuid + '/return', {});
      },
    );
    const resultInstance = plainToInstance(IdentificationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async createIdentification() {
    const result = await this.requestExecutor.run({ scope: 'identification:create' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/identifications', {});
    });
    const resultInstance = plainToInstance(CreateIdentificationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async getQuestionnaire(requestUuid: string): Promise<QuestionnaireResultEntity> {
    const result = await this.requestExecutor.run(
      { scope: `identification:questionnaire:${requestUuid}` },
      async ({ signal }) => {
        const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
        return request.get(this.config.get('GATEWAY_HOST_API') + '/kyc/' + requestUuid + '/questionnaire');
      },
    );
    const resultInstance = plainToInstance(QuestionnaireResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
