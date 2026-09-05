import { OtpEntity } from '@library/domain';

export abstract class OtpStoreInterface {
  abstract data: OtpEntity;
  abstract phone: string;

  abstract execute(data: OtpEntity, phone: string): void;
}
