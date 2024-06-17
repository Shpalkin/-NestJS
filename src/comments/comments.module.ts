import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsGateway } from './comments.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, BookCommentsSchema } from './dto/comments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comments.name,
        schema: BookCommentsSchema,
      },
    ]),
  ],
  providers: [CommentsGateway, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
