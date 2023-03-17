//#region Imports

import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { BaseEntity } from '../../../../common/crud/base.entity';
import { BaseRepository } from '../../../../common/crud/base.repository';

//#endregion

/**
 * A classe que representa o serviço que representa os serviços base para os crud
 */
export class NestjsxCrudService<TEntity extends BaseEntity,
  TRepository extends BaseRepository<TEntity> = BaseRepository<TEntity>> extends TypeOrmCrudService<TEntity> {

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
