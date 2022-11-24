import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  create(@Body() postDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createPost(postDto);
  }

  @Get()
  getAll(): Promise<PostEntity[]> {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.getOnePost(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.postsService.removePost(+id);
  }
}