import { ChangePhoneResultEntity } from '../domain/change-phone-result.entity.ts';
import type { ChangePhoneInput } from '../data/gateway/input/change-phone.input.ts';

export abstract class ChangePhoneServiceInterface {
  abstract getStatus(uuid: string): Promise<ChangePhoneResultEntity>;
  abstract initiate(params: ChangePhoneInput): Promise<ChangePhoneResultEntity>;
}
