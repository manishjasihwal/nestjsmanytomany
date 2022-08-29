/* eslint-disable prettier/prettier */
import { IsDefined, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../role/entities/role.entity';
// import { Role } from './role.entity';
// import { SocialMediaEntity } from './role.entity';
// import { Mail } from './post2.entity';

@Entity('user')
export default class FeedPostEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  @IsString()
  @IsDefined()
  name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  mobile_number: number;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  // @ManyToMany(() => Role)
  // @JoinTable()
  // roles: Role[];

  // @ManyToMany(() => Role, (role) => role.users)
  // @JoinTable()
  // roles: Role[];

  // @ManyToMany()

  // @ManyToMany(() => Role, (role) => role.role_name)
  // @JoinTable()
  // role: Role[];

  // @OneToMany(() => SocialMediaEntity, (social: any) => social.socialname, {})
  // socialmedias?: FeedPostEntity[];
}
