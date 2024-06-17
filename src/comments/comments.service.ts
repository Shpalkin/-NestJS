import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Comments,
  BookCommentsDocument,
} from '../comments/dto/comments.schema';
import { CommentsDto } from '../comments/dto/comments.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private CommentsModel: Model<BookCommentsDocument>,
  ) {}

  async create(dto: CommentsDto) {
    return await this.CommentsModel.create(dto);
  }

  async update(id: string, dto: Omit<CommentsDto, 'bookId'>) {
    return await this.CommentsModel.findByIdAndUpdate(id, dto);
  }

  async find(id: string) {
    return await this.CommentsModel.findById(id);
  }

  async delete(id: string) {
    return await this.CommentsModel.findByIdAndDelete(id);
  }

  async findAllComments(bookId: number) {
    return await this.CommentsModel.find({ bookId });
  }
}
