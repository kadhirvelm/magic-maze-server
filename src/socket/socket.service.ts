import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SocketService {
  public handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }
}
