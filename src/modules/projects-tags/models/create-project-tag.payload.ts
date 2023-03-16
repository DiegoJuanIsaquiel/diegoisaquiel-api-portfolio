//#region Imports

import { IsBoolean, IsDefined, IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { ProjectCategoryEnum } from "src/common/enum/project-category.enum";


//#endregion

/**
 * A classe que representa o payload enviado para criar um ProjectEntity
 */
export class CreateProjectTagPayload {

  //@ApiProperty()
  @IsDefined({ message: 'O nome do projeto deve ser definido.' })
  @IsString({ message: 'O nome do projeto deve ser um formato String válido' })
  public name!: string;

  //@ApiProperty()
  @IsDefined({ message: 'A descrição do projeto deve ser definida.' })
  @IsString({ message: 'A descrição do projeto deve ser um formato String válido' })
  public description!: string;

  //@ApiProperty()
  @IsDefined({ message: 'The project description must be defined.' })
  @IsString({ message: 'Project description must be a valid String format' })
  public englishDescription!: string;

  //@ApiProperty()
  @IsDefined({ message: 'A imagem do projeto deve ser definido.' })
  @IsString({ message: 'A imagem do projeto deve ser um formato String válido' })
  @IsUrl({ protocols: ['https'] }, { message: 'É necessário enviar uma URL da imagem de perfil válida com HTTPS.' })
  public imageUrl!: string;

  //@ApiProperty({enum: ProjectCategoryEnum})
  @IsDefined({ message: 'A categoria do projeto deve ser definida.' })
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

  //@ApiProperty()
  @IsDefined({ message: 'É nescessário informar se o projeto é confidencial ou não' })
  @IsBoolean({ message: 'A confidencialidade do projeto não pode ter um formato não-lógico' })
  public isConfidential!: boolean;

  //@ApiPropertyOptional()
  @IsOptional()
  @IsBoolean({ message: 'O status do projeto não pode ter um formato não-lógico'})
  public isActive?: boolean;
}
