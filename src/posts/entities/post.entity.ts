import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('posts')
export class PostEntity {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Cool news', description: 'News headline' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Today is a turning point in the IT industry', description: 'News content'})
  @Column()
  content: string;

  @ApiProperty({ example: 'Some image...', description: 'Image' })
  @Column({ nullable: true })
  image?: string;

  @ApiProperty({ example: '2022-11-25', description: 'Date of creation' })
  @CreateDateColumn()  /* ЗАДАЁТСЯ АВТОМАТИЧЕСКИ */
  createdAt: Date;

  @ApiProperty({ example: '2022-11-25', description: 'Date of update' })
  @UpdateDateColumn()  /* ЗАДАЁТСЯ АВТОМАТИЧЕСКИ */
  updatedAt: Date;
}