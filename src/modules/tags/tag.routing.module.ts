import { Module } from '@nestjs/common';
import { TagModule } from './tag.module';
import { TagController } from './controllers/tag.controller';

@Module({
  imports: [
    TagModule,
  ],
  controllers: [
    TagController,
  ],
})
export class TagRoutingModule { }
