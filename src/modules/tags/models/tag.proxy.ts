//#region Imports

import { TagEntity } from '../entities/tag.entity';
import { GetManyDefaultResponseProxy } from '../../../common/proxies/get-many-default-response.proxy';
import { BaseProxy } from '../../../common/crud/base.proxy';
import { mapCrudIfValid } from 'src/common/utils/crud';
import { ProjectTagProxy } from 'src/modules/projects-tags/models/project-tag.proxy';

//#endregion

/**
 * A classe que representa as informações que são enviadas pela API da entidade TagEntity
 */
export class TagProxy extends BaseProxy<TagEntity> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    entity: TagEntity,
  ) {
    super(entity);

    this.name = entity.name;
    this.backgroundColor = entity.backgroundColor;
    this.isActive = entity.isActive;
    //this.projectTag = mapCrudIfValid(entity.projectTags, true);
  }

  //#endregion

  //#region Public Properties


  public name!: string;

  public backgroundColor!: string;

  public isActive: boolean;

  public projectTag?: ProjectTagProxy[];

  //#endregion

}

/**
 * A classe que representa o retorno dos proxies quando é chamado a função GetMany
 */
export class GetManyDefaultResponseTagProxy extends GetManyDefaultResponseProxy {

  /**
   * A lista de entidades que essa busca retornou
   */
  //@ApiProperty({ type: () => TagProxy, isArray: true })
  data!: TagProxy[];

}
