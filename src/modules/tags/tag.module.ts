import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './entities/tag.entity';
import { TagService } from './services/tag.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TagEntity
        ])
    ],
    exports: [
        TagService,
    ],
    providers: [
        TagService
    ]
})
export class TagModule {}
