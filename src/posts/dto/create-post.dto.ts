import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Cool news', description: 'News headline' })
  readonly title: string;

  @ApiProperty({ example: 'Today is a turning point in the IT industry', description: 'News content' })
  readonly content: string;

  @ApiProperty({ example: 'Some image...', description: 'Image' })
  readonly image?: string;
}