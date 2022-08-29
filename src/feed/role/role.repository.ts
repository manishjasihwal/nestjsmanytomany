/* eslint-disable prettier/prettier */
// import { EntityRepository, Repository } from 'typeorm';
// import { subjects } from '../entity/subject.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Role } from './entities/role.entity';
@EntityRepository(Role)
export class RoleRespoitory extends Repository<Role> {}
