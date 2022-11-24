import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async createPost(postDto: CreatePostDto): Promise<PostEntity> {
    return this.postRepository.save({ ...postDto });
  }

  async getAllPosts(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async getOnePost(id: number): Promise<PostEntity> {
    return this.postRepository.findOne({ where: { id } });
  }

  async removePost(id: number): Promise<number> {
    await this.postRepository.delete({ id });
    return id;
  }
}