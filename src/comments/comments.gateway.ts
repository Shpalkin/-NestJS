import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { CommentsDto } from './dto/comments.dto';
import { CommentsService } from './comments.service';

@WebSocketGateway()
export class CommentsGateway {
  constructor(private readonly bookCommentsService: CommentsService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('addComment')
  handleAddComment(@MessageBody() data: CommentsDto) {
    return this.bookCommentsService.create(data);
  }

  @SubscribeMessage('getAllComments')
  async handleGetAllComments(
    @MessageBody() data: Omit<CommentsDto, 'comment'>,
    @ConnectedSocket() client: Socket,
  ) {
    const comments = await this.bookCommentsService.findAllComments(
      data.bookId,
    );
    client.emit('getAllComments', comments);
  }
}
