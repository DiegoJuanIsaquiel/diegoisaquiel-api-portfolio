import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { CreateProjectPayload } from '../models/create-project.payload';
import { UpdateProjectPayload } from '../models/update-project.payload';
import { ProjectService } from '../services/project.service';


@Controller('project')
export class ProjectController {

  //#region Constructo

  constructor(
    private readonly projectService: ProjectService
  ) { }

  //#endregion

  //#region Public Methods

  @Get()
  public getMany(): Promise<ProjectEntity[]> {
    return this.projectService.listMany();
  }

  @Get(':entityId')
  public getOne(@Param('entityId') entityId: string){
    return this.projectService.get(entityId);
  }

  @Post()
  public createOne(@Body() payload: CreateProjectPayload): Promise<ProjectEntity>  {
    return this.projectService.create(payload);
  }

  @Put(':entityId')
  public updateOne(@Param('entityId') entityId: string, @Body() payload: UpdateProjectPayload): Promise<ProjectEntity>  {
    return this.projectService.update(entityId, payload);
  }

  @Delete(':entityId')
  public deleteOne(@Param('entityId') entityId: string): Promise<ProjectEntity>  {
    return this.projectService.delete(entityId);
  }

  //#endregion
}
