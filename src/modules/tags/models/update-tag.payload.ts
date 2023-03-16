//#region Imports

import { IsBoolean, IsOptional, IsString } from "class-validator";

//#endregion

/**
 * A classe que representa o payload enviado para editar um TagEntity
 */
export class UpdateTagPayload {
    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'O nome da tag deve ser um formato String válido' })
    public name!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'A cor de fundo da Tag deve ser um formato String válido' })
    public backgroundColor!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsBoolean({ message: 'O status do projeto não pode ter um formato não-lógico' })
    public isActive?: boolean;
}
