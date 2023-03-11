import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectTagEntity } from '../entities/project-tag.entity';
import { CreateProjectTagPayload } from '../models/create-project-tag.payload';
import { UpdateProjectTagPayload } from '../models/update-project-tag.payload';

@Injectable()
export class ProjectTagService {

  constructor(
    @InjectRepository(ProjectTagEntity)
    private readonly projectRepository: Repository<ProjectTagEntity>,
){}

public listMany(): Promise<ProjectTagEntity[]> {
    return this.projectRepository.find();
}

public async get(entityId: string) {
    const entity = await this.projectRepository.findOne(entityId);

    if (!entity)
        throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

    return entity;
}

public create(payload: CreateProjectTagPayload) {
    const entity = this.projectRepository.create(payload);
    return this.projectRepository.save(entity)
}

public async update(entityId: string, payload: UpdateProjectTagPayload) {
    const entity = await this.projectRepository.preload({
        id: +entityId,
        ...payload
    })

    if(!entity)
        throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

    return this.projectRepository.save(entity);
}

public async delete(entityId: string){
    const entity = await this.projectRepository.findOne(entityId);

    if(!entity)
        throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

    return this.projectRepository.remove(entity)
}
}
