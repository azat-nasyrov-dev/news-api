import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  async createComment(commentDto: CreateCommentDto): Promise<CommentEntity> {
    return this.commentRepository.save({ ...commentDto });
  }

  async getAllComments(): Promise<CommentEntity[]> {
    return this.commentRepository.find();
  }

  async getOneComment(id: number): Promise<CommentEntity> {
    return this.commentRepository.findOne({ where: { id } });
  }

  async removeComment(id: number): Promise<number> {
    await this.commentRepository.delete({ id });
    return id;
  }
}
