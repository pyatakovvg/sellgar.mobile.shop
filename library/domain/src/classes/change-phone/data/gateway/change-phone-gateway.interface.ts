import { ChangePhoneResultEntity } from '../../domain/change-phone-result.entity.ts';
import type { ChangePhoneInput } from './input/change-phone.input.ts';

export abstract class ChangePhoneGatewayInterface {
  abstract getStatus(uuid: string): Promise<ChangePhoneResultEntity>;
  abstract initiate(params: ChangePhoneInput): Promise<ChangePhoneResultEntity>;
}
