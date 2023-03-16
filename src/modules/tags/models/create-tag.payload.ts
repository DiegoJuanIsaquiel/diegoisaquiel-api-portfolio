//#region Imports

import { IsBoolean, IsDefined, IsOptional, IsString, } from "class-validator";

//#endregion

/**
 * A classe que representa o payload enviado para criar um TagEntity
 */
export class CreateTagPayload {

  //@ApiProperty()
  @IsDefined({ message: 'O nome da tag deve ser definida.' })
  @IsString({ message: 'O nome da tag deve ser um formato String válido' })
  public name!: string;

  //@ApiProperty()
  @IsDefined({ message: 'A cor de fundo da Tag deve ser definida.' })
  @IsString({ message: 'A cor de fundo da Tag deve ser um formato String válido' })
  public backgroundColor!: string;

  //@ApiPropertyOptional()
  @IsOptional()
  @IsBoolean({ message: 'O status do projeto não pode ter um formato não-lógico'})
  public isActive?: boolean;
}
