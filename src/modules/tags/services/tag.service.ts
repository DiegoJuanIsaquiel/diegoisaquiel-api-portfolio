import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from '../entities/tag.entity';
import { CreateTagPayload } from '../models/create-tag.payload';
import { UpdateTagPayload } from '../models/update-tag.payload';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(TagEntity)
    private readonly projectRepository: Repository<TagEntity>,
){}

public listMany(): Promise<TagEntity[]> {
    return this.projectRepository.find();
}

public async get(entityId: string) {
    const entity = await this.projectRepository.findOne(entityId);

    if (!entity)
        throw new NotFoundException(`O Projeto procurado pela identificação (${entityId}) não foi encontrado.`);

    return entity;
}

public create(payload: CreateTagPayload) {
    const entity = this.projectRepository.create(payload);
    return this.projectRepository.save(entity)
}

public async update(entityId: string, payload: UpdateTagPayload) {
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
