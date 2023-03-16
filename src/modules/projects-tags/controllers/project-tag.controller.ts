import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PaginationQuery } from 'src/common/query/pagination.query';
import { ProjectTagEntity } from '../entities/project-tag.entity';
import { CreateProjectTagPayload } from '../models/create-project-tag.payload';
import { GetManyDefaultResponseProjectTagProxy } from '../models/project-tag.proxy';
import { UpdateProjectTagPayload } from '../models/update-project-tag.payload';
import { ProjectTagService } from '../services/project-tag.service';

@Controller('project/:projectId/tags')
export class ProjectTagController {

  //#region Constructo

  constructor(
    private readonly tagService: ProjectTagService
  ) { }

  //#endregion

  //#region Public Methods

  @Get()
  public getMany(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Query() paginationQuery: PaginationQuery,
  ): Promise<GetManyDefaultResponseProjectTagProxy> {
    return this.tagService.listMany(projectId, paginationQuery);
  }

  @Get(':entityId')
  public getOne(@Param('entityId') entityId: string){
    return this.tagService.get(entityId);
  }

  @Post()
  public createOne(@Body() payload: CreateProjectTagPayload): Promise<ProjectTagEntity>  {
    return this.tagService.create(payload);
  }

  @Put(':entityId')
  public updateOne(@Param('entityId') entityId: string, @Body() payload: UpdateProjectTagPayload): Promise<ProjectTagEntity>  {
    return this.tagService.update(entityId, payload);
  }

  @Delete(':entityId')
  public deleteOne(@Param('entityId') entityId: string): Promise<ProjectTagEntity>  {
    return this.tagService.delete(entityId);
  }

  //#endregion
}
