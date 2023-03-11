//#region Imports

import { IsBoolean, IsDefined, IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { ProjectCategoryEnum } from "src/common/enum/project-category.enum";

//#endregion

/**
 * A classe que representa o payload enviado para editar um ProjectEntity
 */
export class UpdateProjectPayload {

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'O nome do projeto deve ser um formato String válido' })
    public name!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'A descrição do projeto deve ser um formato String válido' })
    public description!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'Project description must be a valid String format' })
    public englishDescription!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'A imagem do projeto deve ser um formato String válido' })
    @IsUrl({ protocols: ['https'] }, { message: 'É necessário enviar uma URL da imagem de perfil válida com HTTPS.' })
    public iamgeUrl!: string;

    //@ApiPropertyOptional({enum: ProjectCategoryEnum})
    @IsOptional()
    @IsEnum(ProjectCategoryEnum, { message: 'A categoria do projeto deve ser válida.' })
    public category!: ProjectCategoryEnum;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'O repositório do projeto deve ser um formato String válido' })
    public gitRepositoryUrl!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsString({ message: 'O link do projeto deve ser um formato String válido' })
    public projectLinkUrl!: string;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsBoolean({ message: 'A confidencialidade do projeto não pode ter um formato não-lógico' })
    public isConfidential!: boolean;

    //@ApiPropertyOptional()
    @IsOptional()
    @IsBoolean({ message: 'O status do projeto não pode ter um formato não-lógico' })
    public isActive?: boolean;
}
