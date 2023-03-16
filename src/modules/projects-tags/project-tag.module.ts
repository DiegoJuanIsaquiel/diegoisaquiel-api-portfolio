import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTagEntity } from './entities/project-tag.entity';
import { ProjectTagRepository } from './repositories/project-tag.repository';
import { ProjectTagService } from './services/project-tag.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProjectTagEntity,
            ProjectTagRepository
        ])
    ],
    exports: [
        ProjectTagService,
    ],
    providers: [
        ProjectTagService
    ]
})
export class ProjectTagModule {}
