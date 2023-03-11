import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { TagEntity } from '../entities/tag.entity';
import { CreateTagPayload } from '../models/create-tag.payload';
import { UpdateTagPayload } from '../models/update-tag.payload';
import { TagService } from '../services/tag.service';


@Controller('tag')
export class TagController {

  //#region Constructo

  constructor(
    private readonly tagService: TagService
  ) { }

  //#endregion

  //#region Public Methods

  @Get()
  public getMany(): Promise<TagEntity[]> {
    return this.tagService.listMany();
  }

  @Get(':entityId')
  public getOne(@Param('entityId') entityId: string){
    return this.tagService.get(entityId);
  }

  @Post()
  public createOne(@Body() payload: CreateTagPayload): Promise<TagEntity>  {
    return this.tagService.create(payload);
  }

  @Put(':entityId')
  public updateOne(@Param('entityId') entityId: string, @Body() payload: UpdateTagPayload): Promise<TagEntity>  {
    return this.tagService.update(entityId, payload);
  }

  @Delete(':entityId')
  public deleteOne(@Param('entityId') entityId: string): Promise<TagEntity>  {
    return this.tagService.delete(entityId);
  }

  //#endregion
}
