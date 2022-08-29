import FeedPostEntity from 'src/feed/models/post.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column()
  role_name: string;

  // @ManyToMany(() => FeedPostEntity, (user) => user.roles)
  // users: FeedPostEntity;
}
