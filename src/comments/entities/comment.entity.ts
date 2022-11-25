import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('comments')
export class CommentEntity {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Alex Miller', description: 'Author' })
  @Column({ nullable: true, default: 'Anonymous' })
  author?: string;

  @ApiProperty({ example: 'This is great news', description: 'Comment' })
  @Column()
  comment: string;
}