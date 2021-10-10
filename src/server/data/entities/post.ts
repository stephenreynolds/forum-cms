import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @PrimaryColumn()
  @ManyToOne(() => User, user => user.id)
  authorId: number;

  @Column()
  created: Date;

  @Column()
  title: string;

  @Column()
  content: string;
}