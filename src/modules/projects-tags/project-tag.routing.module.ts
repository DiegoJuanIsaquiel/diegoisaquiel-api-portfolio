import { Module } from '@nestjs/common';
import { ProjectTagModule } from './project-tag.module';
import { ProjectTagController } from './controllers/project-tag.controller';

@Module({
  imports: [
    ProjectTagModule,
  ],
  controllers: [
    ProjectTagController,
  ],
})
export class ProjectTagRoutingModule {}
