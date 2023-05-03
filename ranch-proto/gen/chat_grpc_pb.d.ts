// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_pb from "./chat_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getChats: IChatService_IGetChats;
    getChat: IChatService_IGetChat;
    addMessage: IChatService_IAddMessage;
}

interface IChatService_IGetChats extends grpc.MethodDefinition<chat_pb.GetChatsRequest, chat_pb.GetChatsReply> {
    path: "/Chat/GetChats";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_pb.GetChatsRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetChatsRequest>;
    responseSerialize: grpc.serialize<chat_pb.GetChatsReply>;
    responseDeserialize: grpc.deserialize<chat_pb.GetChatsReply>;
}
interface IChatService_IGetChat extends grpc.MethodDefinition<chat_pb.GetChatRequest, chat_pb.GetChatReply> {
    path: "/Chat/GetChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.GetChatRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetChatRequest>;
    responseSerialize: grpc.serialize<chat_pb.GetChatReply>;
    responseDeserialize: grpc.deserialize<chat_pb.GetChatReply>;
}
interface IChatService_IAddMessage extends grpc.MethodDefinition<chat_pb.AddMessageRequest, chat_pb.AddMessageReply> {
    path: "/Chat/AddMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.AddMessageRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.AddMessageRequest>;
    responseSerialize: grpc.serialize<chat_pb.AddMessageReply>;
    responseDeserialize: grpc.deserialize<chat_pb.AddMessageReply>;
}

export const ChatService: IChatService;

export interface IChatServer extends grpc.UntypedServiceImplementation {
    getChats: grpc.handleServerStreamingCall<chat_pb.GetChatsRequest, chat_pb.GetChatsReply>;
    getChat: grpc.handleUnaryCall<chat_pb.GetChatRequest, chat_pb.GetChatReply>;
    addMessage: grpc.handleUnaryCall<chat_pb.AddMessageRequest, chat_pb.AddMessageReply>;
}

export interface IChatClient {
    getChats(request: chat_pb.GetChatsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsReply>;
    getChats(request: chat_pb.GetChatsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsReply>;
    getChat(request: chat_pb.GetChatRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatReply) => void): grpc.ClientUnaryCall;
    getChat(request: chat_pb.GetChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatReply) => void): grpc.ClientUnaryCall;
    getChat(request: chat_pb.GetChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatReply) => void): grpc.ClientUnaryCall;
    addMessage(request: chat_pb.AddMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageReply) => void): grpc.ClientUnaryCall;
    addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageReply) => void): grpc.ClientUnaryCall;
    addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageReply) => void): grpc.ClientUnaryCall;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getChats(request: chat_pb.GetChatsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsReply>;
    public getChats(request: chat_pb.GetChatsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsReply>;
    public getChat(request: chat_pb.GetChatRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatReply) => void): grpc.ClientUnaryCall;
    public getChat(request: chat_pb.GetChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatReply) => void): grpc.ClientUnaryCall;
    public getChat(request: chat_pb.GetChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatReply) => void): grpc.ClientUnaryCall;
    public addMessage(request: chat_pb.AddMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageReply) => void): grpc.ClientUnaryCall;
    public addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageReply) => void): grpc.ClientUnaryCall;
    public addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageReply) => void): grpc.ClientUnaryCall;
}
