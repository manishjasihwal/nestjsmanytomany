/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRespoitory } from './role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from '../feed.module';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRespoitory]), FeedModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
