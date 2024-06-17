import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comments {
  @Prop({ required: true })
  public bookId: number;

  @Prop({ required: true })
  public comment: string;
}

export type BookCommentsDocument = Comments & Document;

export const BookCommentsSchema = SchemaFactory.createForClass(Comments);
