//#region Imports

import { BaseIdentityProxy } from '../identity/base-identity.proxy';
import { BaseTimestampEntity } from './base-timestamp-entity';

//#endregion

/**
 * A classe que representa as informações básicas de toda entidade que será enviada para o usuário
 */
export class BaseTimestampProxy<T extends BaseTimestampEntity> extends BaseIdentityProxy<T> {

  //#region Constructor

  /**
   * Construtor padrão
   *
   * @param base As informações da entidade
   */
  constructor(base: T) {
    super(base);

    this.createdAt = base.createdAt;
    this.updatedAt = base.updatedAt;
  }

  //#endregion

  //#region Public Properties

  /**
   * Diz quando foi criado essa postagem
   */
  public createdAt?: Date;

  /**
   * Diz quando foi atualizado essa postagem
   */
  public updatedAt?: Date;

  //#endregion

}
