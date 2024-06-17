import { IsDefined, IsString, IsEmpty, IsNumber } from 'class-validator';

export class CommentsDto {
  @IsDefined()
  @IsNumber()
  bookId: number;

  @IsEmpty()
  @IsString()
  comment: string;
}
