import { IsString } from 'class-validator';

export class DraftOperationEntity {
  @IsString()
  uuid: string;
}
