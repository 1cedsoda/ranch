import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';


export class ChatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getChats(
    request: chat_pb.GetChatsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatsReply>;

  getChat(
    request: chat_pb.GetChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.GetChatReply) => void
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatReply>;

  addMessage(
    request: chat_pb.AddMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.AddMessageReply) => void
  ): grpcWeb.ClientReadableStream<chat_pb.AddMessageReply>;

}

export class ChatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getChats(
    request: chat_pb.GetChatsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatsReply>;

  getChat(
    request: chat_pb.GetChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.GetChatReply>;

  addMessage(
    request: chat_pb.AddMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.AddMessageReply>;

}

