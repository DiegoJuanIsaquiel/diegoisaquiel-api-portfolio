//#region Imports

import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../../common/crud/base.repository';
import { ProjectTagEntity } from '../entities/project-tag.entity';

//#endregion

/**
 * A classe que representa o serviço que lida a entidade ProjectTagEntity
 */
@EntityRepository(ProjectTagEntity)
export class ProjectTagRepository extends BaseRepository<ProjectTagEntity> {}
