/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './controllers/feed.controller';

import FeedPostEntity from './models/post.entity';

import { FeedService } from './services/feed.service';

import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';
// import { Role } from './role/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity, Role]),
    MulterModule.register({ dest: './uploads' }),
  ],
  providers: [FeedService, RoleService],
  controllers: [FeedController, RoleController],
})
export class FeedModule {}
