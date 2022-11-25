import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Comment creation' })
  @ApiResponse({ status: 200, type: CommentEntity })
  @Post()
  create(@Body() commentDto: CreateCommentDto): Promise<CommentEntity> {
    return this.commentsService.createComment(commentDto);
  }

  @ApiOperation({ summary: 'Getting all comments' })
  @ApiResponse({ status: 200, type: [CommentEntity] })
  @Get()
  getAll(): Promise<CommentEntity[]> {
    return this.commentsService.getAllComments();
  }

  @ApiOperation({ summary: 'Getting one comment' })
  @ApiResponse({ status: 200, type: CommentEntity })
  @Get(':id')
  getOne(@Param('id') id: string): Promise<CommentEntity> {
    return this.commentsService.getOneComment(+id);
  }

  @ApiOperation({ summary: 'Deleting a comment' })
  @ApiResponse({ status: 200, type: CommentEntity })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.commentsService.removeComment(+id);
  }
}
