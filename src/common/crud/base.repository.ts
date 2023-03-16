//#region Imports

import { NotFoundException } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseIdentityRepository } from '../../common/identity/base-identity.repository';

//#endregion

/**
 * A classe que representa o serviço que lida com a entidade base
 */
export class BaseRepository<TEntity extends BaseEntity> extends BaseIdentityRepository<TEntity> {

  /**
   * Método que procura uma entidade pela sua identificação
   *
   * @param entityId A identificação da entidade
   * @param validateIsActive Diz se deve validar se a entidade está ativa
   * @param relations A lista de relações que você pode incluir
   */
  public async findById(entityId: number, validateIsActive: boolean = true, relations?: string[]): Promise<TEntity> {
    const [entity] = await this.findByIds([entityId], {
      where: {
        ...validateIsActive && { isActive: true },
      },
      relations,
    }).catch(() => []);

    if (!entity)
      throw new NotFoundException(`A entidade procurada pela identificação (${ entityId }) não foi encontrada.`);

    return entity;
  }

}
