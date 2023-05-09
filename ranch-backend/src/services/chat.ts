import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, handleServerStreamingCall, sendUnaryData } from '@grpc/grpc-js'
import { IChatServer } from 'ranch-proto/dist/grpc';
import { AddMessageReply, AddMessageRequest, GetChatReply, GetChatRequest, GetChatsReply, GetChatsRequest } from 'ranch-proto/dist/pb';

export class ChatServer implements IChatServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;
  getChats (call: ServerWritableStream<GetChatsRequest, GetChatsReply>) {

  }

  getChat (call: ServerUnaryCall<GetChatRequest, GetChatReply>, callback: sendUnaryData<GetChatReply>) {

  };

  addMessage (call: ServerUnaryCall<AddMessageRequest, AddMessageReply>, callback: sendUnaryData<AddMessageReply>) {

  };
}
