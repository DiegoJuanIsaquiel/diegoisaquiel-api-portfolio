//#region Imports

import { ProjectEntity } from '../entities/project.entity';
import { GetManyDefaultResponseProxy } from '../../../common/proxies/get-many-default-response.proxy';
import { BaseProxy } from '../../../common/crud/base.proxy';
import { mapCrudIfValid } from '../../../common/utils/crud';
import { ProjectTagProxy } from 'src/modules/projects-tags/models/project-tag.proxy';
import { ProjectCategoryEnum } from 'src/common/enum/project-category.enum';

//#endregion

/**
 * A classe que representa as informações que são enviadas pela API da entidade ProjectEntity
 */
export class ProjectProxy extends BaseProxy<ProjectEntity> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entity: ProjectEntity,
  ) {
    super(entity);

    this.name = entity.name;
    this.description = entity.description;
    this.englishDescription = entity.englishDescription;
    this.imageUrl = entity.imageUrl;
    this.category = entity.category;
    this.gitRepositoryUrl = entity.gitRepositoryUrl;
    this.projectLinkUrl = entity.projectLinkUrl;
    this.isConfidential = entity.isConfidential;
    this.isActive = entity.isActive;
    //this.projectTags = mapCrudIfValid(entity.projectTags, true)

  }

  //#endregion

  //#region Public Properties

  public name!: string;

  public description!: string;

  public englishDescription!: string;

  public imageUrl!: string;

  public category!: ProjectCategoryEnum;

  public gitRepositoryUrl!: string;

  public projectLinkUrl!: string;

  public isConfidential!: boolean;

  public isActive?: boolean;

  public projectTags: ProjectTagProxy[];

  //#endregion

}

/**
 * A classe que representa o retorno dos proxies quando é chamado a função GetMany
 */
export class GetManyDefaultResponseProjectProxy extends GetManyDefaultResponseProxy {

  /**
   * A lista de entidades que essa busca retornou
   */
  //@ApiProperty({ type: () => ProjectProxy, isArray: true })
  data!: ProjectProxy[];

}
