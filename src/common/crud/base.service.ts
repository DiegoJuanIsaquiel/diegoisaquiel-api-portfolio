//#region Imports

import Emittery from 'emittery';
import { DefaultChangeEntityCallback, DefaultEmitteryEvents } from '../../infra/libs/emittery/emittery';
import { EntityTransformerFunction } from '../../infra/libs/transformer/transformer';
import { BaseEntity } from './base.entity';
import { BaseRepository } from './base.repository';
import { BaseIdentityService } from '../../common/identity/base-identity.service';

//#endregion

/**
 * A classe que representa o serviço base para outros serviços
 */
export class BaseService<TEntity extends BaseEntity, TRepository extends BaseRepository<TEntity>, TEmitteryEvents extends PropertyKey = DefaultEmitteryEvents>
  extends BaseIdentityService<TEntity, TRepository> {

  //#region Protected Properties

  /**
  * Os eventos que podem ser lançados por esse serviço
  */
  protected readonly emittery: any = new Emittery();
  //Emittery<Record<TEmitteryEvents | DefaultEmitteryEvents, DefaultChangeEntityCallback<TEntity>>>

  //#endregion

  //#region Public Properties

  /**
   * A lista de métodos para transformar as entidades e realizar qualquer alteração necessária para retornar para o proxy
   */
  public readonly entityToProxyTransformers: EntityTransformerFunction<TEntity>[] = [];

  /**
   * A lista de métodos para transformar as entidades e realizar qualquer alteração necessária antes de salvar no banco
   */
  public readonly payloadToEntityTransformers: EntityTransformerFunction<TEntity>[] = [];

  //#endregion

  //#region Events

  /**
   * A referềncia da instância de eventos
   */
  public get events(): Omit<typeof this.emittery, 'emit' | 'emitSerial'> {
    return this.emittery;
  }

  //#endregion

}
