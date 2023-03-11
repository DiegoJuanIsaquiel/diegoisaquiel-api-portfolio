import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { ProjectTagEntity } from '../entities/project-tag.entity';
import { CreateProjectTagPayload } from '../models/create-project-tag.payload';
import { UpdateProjectTagPayload } from '../models/update-project-tag.payload';
import { ProjectTagService } from '../services/project-tag.service';


@Controller('project')
export class ProjectTagController {

  //#region Constructo

  constructor(
    private readonly projectService: ProjectTagService
  ) { }

  //#endregion

  //#region Public Methods

  @Get()
  public getMany(): Promise<ProjectTagEntity[]> {
    return this.projectService.listMany();
  }

  @Get(':entityId')
  public getOne(@Param('entityId') entityId: string){
    return this.projectService.get(entityId);
  }

  @Post()
  public createOne(@Body() payload: CreateProjectTagPayload): Promise<ProjectTagEntity>  {
    return this.projectService.create(payload);
  }

  @Put(':entityId')
  public updateOne(@Param('entityId') entityId: string, @Body() payload: UpdateProjectTagPayload): Promise<ProjectTagEntity>  {
    return this.projectService.update(entityId, payload);
  }

  @Delete(':entityId')
  public deleteOne(@Param('entityId') entityId: string): Promise<ProjectTagEntity>  {
    return this.projectService.delete(entityId);
  }

  //#endregion
}
