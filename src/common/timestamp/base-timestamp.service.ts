//#region Imports

import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { BaseTimestampEntity } from './base-timestamp.entity';
import { BaseTimestampRepository } from './base-timestamp.repository';

//#endregion

/**
 * A classe que representa o serviço que lida com as imagens
 */
export class BaseTimestampService<TEntity extends BaseTimestampEntity,
  TRepository extends BaseTimestampRepository<TEntity>> extends TypeOrmCrudService<TEntity> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    protected readonly repository: TRepository,
  ) {
    super(repository);
  }

  //#endregion

}
