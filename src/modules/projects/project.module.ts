import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './controllers/project.controller';
import { ProjectEntity } from './entities/project.entity';
import { ProjectRepository } from './repositories/project.repository';
import { ProjectService } from './services/project.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProjectEntity,
        ])
    ],
    exports: [
        ProjectService,
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectModule {}
