import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class PaginationQuery {

  @Type(() => Number)
  @IsOptional()
  public limit?: number;

  @Type(() => Number)
  @IsOptional()
  public page?: number;

}