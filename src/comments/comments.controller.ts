import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  create(@Body() commentDto: CreateCommentDto): Promise<CommentEntity> {
    return this.commentsService.createComment(commentDto);
  }

  @Get()
  getAll(): Promise<CommentEntity[]> {
    return this.commentsService.getAllComments();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<CommentEntity> {
    return this.commentsService.getOneComment(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.commentsService.removeComment(+id);
  }
}
