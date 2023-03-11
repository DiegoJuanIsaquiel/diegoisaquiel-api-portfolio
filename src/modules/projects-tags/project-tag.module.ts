import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTagEntity } from './entities/project-tag.entity';
import { ProjectTagService } from './services/project-tag.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProjectTagEntity
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
