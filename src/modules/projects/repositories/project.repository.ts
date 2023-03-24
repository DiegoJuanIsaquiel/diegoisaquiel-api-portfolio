//#region Imports

import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../../common/crud/base.repository';
import { ProjectEntity } from '../entities/project.entity';

//#endregion

/**
 * A classe que representa o serviço que lida a entidade ProjectEntity
 */
@EntityRepository(ProjectEntity)
export class ProjectRepository extends BaseRepository<ProjectEntity> {}
