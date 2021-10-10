import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role";
import { Post } from "./post";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: false })
  emailConfirmed: boolean;

  @Column()
  passwordHash: string;

  @ManyToMany(() => Role, role => role.users, { cascade: true })
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Post, post => post.authorId)
  posts: Post[];
}