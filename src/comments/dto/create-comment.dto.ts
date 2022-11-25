import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'Alex Miller', description: 'Author' })
  readonly author?: string;

  @ApiProperty({ example: 'This is great news', description: 'Comment' })
  readonly comment: string;
}