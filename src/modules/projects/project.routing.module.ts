import { Module } from '@nestjs/common';
import { ProjectModule } from './project.module';
import { ProjectController } from './controllers/project.controller';

@Module({
  imports: [
    ProjectModule,
  ],
  controllers: [
    ProjectController,
  ],
})
export class ProjectRoutingModule {}
