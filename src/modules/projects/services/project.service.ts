import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../entities/project.entity';
import { CreateProjectPayload } from '../models/create-project.payload';
import { UpdateProjectPayload } from '../models/update-project.payload';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
){}

public listMany(): Promise<ProjectEntity[]> {
    return this.projectRepository.find();
}

public async get(entityId: string) {
    const entity = await this.projectRepository.findOne(entityId);

    if (!entity)
        throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

    return entity;
}

public create(payload: CreateProjectPayload) {
    const entity = this.projectRepository.create(payload);
    return this.projectRepository.save(entity)
}

public async update(entityId: string, payload: UpdateProjectPayload) {
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
