import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './entities/post.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Post creation' })
  @ApiResponse({ status: 200, type: PostEntity })
  @Post()
  create(@Body() postDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createPost(postDto);
  }

  @ApiOperation({ summary: 'Getting all posts' })
  @ApiResponse({ status: 200, type: [PostEntity] })
  @Get()
  getAll(): Promise<PostEntity[]> {
    return this.postsService.getAllPosts();
  }

  @ApiOperation({ summary: 'Getting one post' })
  @ApiResponse({ status: 200, type: PostEntity })
  @Get(':id')
  getOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.getOnePost(+id);
  }

  @ApiOperation({ summary: 'Deleting a post' })
  @ApiResponse({ status: 200, type: PostEntity })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.postsService.removePost(+id);
  }
}