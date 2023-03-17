//#region Imports

import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../../common/crud/base.repository';
import { TagEntity } from '../entities/tag.entity';

//#endregion

/**
 * A classe que representa o serviço que lida a entidade TagEntity
 */
@EntityRepository(TagEntity)
export class TagRepository extends BaseRepository<TagEntity> {}
