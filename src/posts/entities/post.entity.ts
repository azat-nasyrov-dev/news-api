import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  image?: string;

  @CreateDateColumn()  /* ЗАДАЁТСЯ АВТОМАТИЧЕСКИ */
  createdAt: Date;

  @UpdateDateColumn()  /* ЗАДАЁТСЯ АВТОМАТИЧЕСКИ */
  updatedAt: Date;
}