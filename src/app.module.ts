import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CommentsModule,
    MongooseModule.forRoot(`${process.env.MONGODB_CONNECTION}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
