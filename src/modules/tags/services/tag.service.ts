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
    private readonly tagRepository: Repository<TagEntity>,
){}

public listMany(): Promise<TagEntity[]> {
    return this.tagRepository.find();
}

public async get(entityId: string): Promise<TagEntity> {
    const entity = await this.tagRepository.findOne(entityId);

    if (!entity)
        throw new NotFoundException(`A Tag procurada pela identificação (${entityId}) não foi encontrada.`);

    return entity;
}

public create(payload: CreateTagPayload): Promise<TagEntity> {
    const entity = this.tagRepository.create(payload);
    return this.tagRepository.save(entity)
}

public async update(entityId: string, payload: UpdateTagPayload): Promise<TagEntity> {
    const entity = await this.tagRepository.preload({
        id: +entityId,
        ...payload
    })

    if(!entity)
        throw new NotFoundException(`A Tag procurada pela identificação (${entityId}) não foi encontrada.`);

    return this.tagRepository.save(entity);
}

public async delete(entityId: string): Promise<TagEntity> {
    const entity = await this.tagRepository.findOne(entityId);

    if(!entity)
        throw new NotFoundException(`A Tag procurada pela identificação (${entityId}) não foi encontrada.`);

    return this.tagRepository.remove(entity)
}
}
