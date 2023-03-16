//#region Imports

import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQuery } from 'src/common/query/pagination.query';
import { ProjectTagEntity } from '../entities/project-tag.entity';
import { CreateProjectTagPayload } from '../models/create-project-tag.payload';
import { UpdateProjectTagPayload } from '../models/update-project-tag.payload';
import { mapCrud } from '../../../common/utils/crud';
import { GetManyDefaultResponseProjectTagProxy } from '../models/project-tag.proxy';
import { ProjectTagRepository } from '../repositories/project-tag.repository';
import { BaseService } from '../../../common/crud/base.service'

//#endregion

@Injectable()
export class ProjectTagService extends BaseService<ProjectTagEntity, ProjectTagRepository> {

    //#region Constructor

    constructor(
        repository: ProjectTagRepository,
    ) {
        super(repository);
    }

    //#endregion

    //#region Public Methods

    public async listMany(
        projectId: number,
        paginationQuery: PaginationQuery,
    ): Promise<GetManyDefaultResponseProjectTagProxy> {
        const {
            limit = 1000,
            page = 1,
        } = paginationQuery;

        const onValidate = async () => {
            const [project, total] = await this.repository.findAndCount({
                where: {
                    projectId,
                },
                relations: ['project', 'tag'],
                take: limit,
                skip: (page - 1) * limit,
            });

            return {
                data: mapCrud(project as any),
                count: project.length,
                page: page,
                total,
                pageCount: limit ? Math.ceil(total / limit) : 1,
            };
        };

        return await onValidate();

        throw new NotFoundException(`O Projeto procurado pela identificação (${projectId}) não foi encontrado.`);

    }

    //#endregion

    public async get(entityId: string) {
        const entity = await this.repository.findOne(entityId);

        if (!entity)
            throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

        return entity;
    }

    public create(payload: CreateProjectTagPayload) {
        const entity = this.repository.create(payload);
        return this.repository.save(entity)
    }

    public async update(entityId: string, payload: UpdateProjectTagPayload) {
        const entity = await this.repository.preload({
            id: +entityId,
            ...payload
        })

        if (!entity)
            throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

        return this.repository.save(entity);
    }

    public async delete(entityId: string) {
        const entity = await this.repository.findOne(entityId);

        if (!entity)
            throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

        return this.repository.remove(entity)
    }
}
