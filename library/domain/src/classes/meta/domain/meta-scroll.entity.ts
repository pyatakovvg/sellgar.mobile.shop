import { IsBoolean, IsNumber } from 'class-validator';

export class MetaScrollEntity {
  @IsNumber()
  take: number;

  @IsBoolean()
  hasMore: boolean;
}
