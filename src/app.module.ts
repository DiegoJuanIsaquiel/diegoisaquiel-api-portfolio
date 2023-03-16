import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectTagRoutingModule } from './modules/projects-tags/project-tag.routing.module';
import { ProjectRoutingModule } from './modules/projects/project.routing.module';
import { TagRoutingModule } from './modules/tags/tag.routing.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProjectRoutingModule,
    TagRoutingModule,
    ProjectTagRoutingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
