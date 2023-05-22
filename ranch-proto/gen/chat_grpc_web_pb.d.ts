import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';


export class ChatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createChat(
    request: chat_pb.CreateChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.CreateChatResponse) => void
  ): grpcWeb.ClientReadableStream<chat_pb.CreateChatResponse>;

  getChats(
    request: chat_pb.GetChatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.GetChatsResponse) => void
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatsResponse>;

  streamChats(
    request: chat_pb.GetChatsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatsResponse>;

  getChatMessages(
    request: chat_pb.GetChatMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.GetChatMessagesResponse) => void
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatMessagesResponse>;

  setChatTitle(
    request: chat_pb.SetChatTitleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.SetChatTitleResponse) => void
  ): grpcWeb.ClientReadableStream<chat_pb.SetChatTitleResponse>;

  addMessage(
    request: chat_pb.AddMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.AddMessageResponse) => void
  ): grpcWeb.ClientReadableStream<chat_pb.AddMessageResponse>;

}

export class ChatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createChat(
    request: chat_pb.CreateChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.CreateChatResponse>;

  getChats(
    request: chat_pb.GetChatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.GetChatsResponse>;

  streamChats(
    request: chat_pb.GetChatsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<chat_pb.GetChatsResponse>;

  getChatMessages(
    request: chat_pb.GetChatMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.GetChatMessagesResponse>;

  setChatTitle(
    request: chat_pb.SetChatTitleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.SetChatTitleResponse>;

  addMessage(
    request: chat_pb.AddMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chat_pb.AddMessageResponse>;

}

