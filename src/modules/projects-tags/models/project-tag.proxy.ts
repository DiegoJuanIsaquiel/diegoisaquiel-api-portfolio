//#region Imports

import { ProjectTagEntity } from '../entities/project-tag.entity';
import { GetManyDefaultResponseProxy } from '../../../common/proxies/get-many-default-response.proxy';
import { BaseProxy } from '../../../common/crud/base.proxy';
import { TagProxy } from 'src/modules/tags/models/tag.proxy';
import { ProjectProxy } from 'src/modules/projects/models/project.proxy';
import { mapCrudIfValid } from 'src/common/utils/crud';

//#endregion

/**
 * A classe que representa as informações que são enviadas pela API da entidade ProjectTagEntity
 */
export class ProjectTagProxy extends BaseProxy<ProjectTagEntity> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entity: ProjectTagEntity,
  ) {
    super(entity);

    this.projectId = entity.projectId
    this.tagId = entity.tagId
    this.tag = mapCrudIfValid(entity.tag)
    this.project = mapCrudIfValid(entity.project)
  }

  //#endregion

  //#region Public properties

  public projectId: number;

  public tagId: number;

  public tag?: TagProxy;

  public project?: ProjectProxy;

  //#endregion
}

/**
 * A classe que representa o retorno dos proxies quando é chamado a função GetMany
 */
export class GetManyDefaultResponseProjectTagProxy extends GetManyDefaultResponseProxy {

  /**
   * A lista de entidades que essa busca retornou
   */
  //@ApiProperty({ type: () => ProjectTagProxy, isArray: true })
  data!: ProjectTagProxy[];

}
