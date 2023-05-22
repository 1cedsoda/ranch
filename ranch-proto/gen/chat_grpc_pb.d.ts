// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_pb from "./chat_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createChat: IChatService_ICreateChat;
    getChats: IChatService_IGetChats;
    streamChats: IChatService_IStreamChats;
    getChatMessages: IChatService_IGetChatMessages;
    setChatTitle: IChatService_ISetChatTitle;
    addMessage: IChatService_IAddMessage;
}

interface IChatService_ICreateChat extends grpc.MethodDefinition<chat_pb.CreateChatRequest, chat_pb.CreateChatResponse> {
    path: "/Chat/CreateChat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.CreateChatRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.CreateChatRequest>;
    responseSerialize: grpc.serialize<chat_pb.CreateChatResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.CreateChatResponse>;
}
interface IChatService_IGetChats extends grpc.MethodDefinition<chat_pb.GetChatsRequest, chat_pb.GetChatsResponse> {
    path: "/Chat/GetChats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.GetChatsRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetChatsRequest>;
    responseSerialize: grpc.serialize<chat_pb.GetChatsResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.GetChatsResponse>;
}
interface IChatService_IStreamChats extends grpc.MethodDefinition<chat_pb.GetChatsRequest, chat_pb.GetChatsResponse> {
    path: "/Chat/StreamChats";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_pb.GetChatsRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetChatsRequest>;
    responseSerialize: grpc.serialize<chat_pb.GetChatsResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.GetChatsResponse>;
}
interface IChatService_IGetChatMessages extends grpc.MethodDefinition<chat_pb.GetChatMessagesRequest, chat_pb.GetChatMessagesResponse> {
    path: "/Chat/GetChatMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.GetChatMessagesRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetChatMessagesRequest>;
    responseSerialize: grpc.serialize<chat_pb.GetChatMessagesResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.GetChatMessagesResponse>;
}
interface IChatService_ISetChatTitle extends grpc.MethodDefinition<chat_pb.SetChatTitleRequest, chat_pb.SetChatTitleResponse> {
    path: "/Chat/SetChatTitle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.SetChatTitleRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.SetChatTitleRequest>;
    responseSerialize: grpc.serialize<chat_pb.SetChatTitleResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.SetChatTitleResponse>;
}
interface IChatService_IAddMessage extends grpc.MethodDefinition<chat_pb.AddMessageRequest, chat_pb.AddMessageResponse> {
    path: "/Chat/AddMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.AddMessageRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.AddMessageRequest>;
    responseSerialize: grpc.serialize<chat_pb.AddMessageResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.AddMessageResponse>;
}

export const ChatService: IChatService;

export interface IChatServer extends grpc.UntypedServiceImplementation {
    createChat: grpc.handleUnaryCall<chat_pb.CreateChatRequest, chat_pb.CreateChatResponse>;
    getChats: grpc.handleUnaryCall<chat_pb.GetChatsRequest, chat_pb.GetChatsResponse>;
    streamChats: grpc.handleServerStreamingCall<chat_pb.GetChatsRequest, chat_pb.GetChatsResponse>;
    getChatMessages: grpc.handleUnaryCall<chat_pb.GetChatMessagesRequest, chat_pb.GetChatMessagesResponse>;
    setChatTitle: grpc.handleUnaryCall<chat_pb.SetChatTitleRequest, chat_pb.SetChatTitleResponse>;
    addMessage: grpc.handleUnaryCall<chat_pb.AddMessageRequest, chat_pb.AddMessageResponse>;
}

export interface IChatClient {
    createChat(request: chat_pb.CreateChatRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.CreateChatResponse) => void): grpc.ClientUnaryCall;
    createChat(request: chat_pb.CreateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.CreateChatResponse) => void): grpc.ClientUnaryCall;
    createChat(request: chat_pb.CreateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.CreateChatResponse) => void): grpc.ClientUnaryCall;
    getChats(request: chat_pb.GetChatsRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatsResponse) => void): grpc.ClientUnaryCall;
    getChats(request: chat_pb.GetChatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatsResponse) => void): grpc.ClientUnaryCall;
    getChats(request: chat_pb.GetChatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatsResponse) => void): grpc.ClientUnaryCall;
    streamChats(request: chat_pb.GetChatsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsResponse>;
    streamChats(request: chat_pb.GetChatsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsResponse>;
    getChatMessages(request: chat_pb.GetChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatMessagesResponse) => void): grpc.ClientUnaryCall;
    getChatMessages(request: chat_pb.GetChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatMessagesResponse) => void): grpc.ClientUnaryCall;
    getChatMessages(request: chat_pb.GetChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatMessagesResponse) => void): grpc.ClientUnaryCall;
    setChatTitle(request: chat_pb.SetChatTitleRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.SetChatTitleResponse) => void): grpc.ClientUnaryCall;
    setChatTitle(request: chat_pb.SetChatTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.SetChatTitleResponse) => void): grpc.ClientUnaryCall;
    setChatTitle(request: chat_pb.SetChatTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.SetChatTitleResponse) => void): grpc.ClientUnaryCall;
    addMessage(request: chat_pb.AddMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageResponse) => void): grpc.ClientUnaryCall;
    addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageResponse) => void): grpc.ClientUnaryCall;
    addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageResponse) => void): grpc.ClientUnaryCall;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createChat(request: chat_pb.CreateChatRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.CreateChatResponse) => void): grpc.ClientUnaryCall;
    public createChat(request: chat_pb.CreateChatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.CreateChatResponse) => void): grpc.ClientUnaryCall;
    public createChat(request: chat_pb.CreateChatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.CreateChatResponse) => void): grpc.ClientUnaryCall;
    public getChats(request: chat_pb.GetChatsRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatsResponse) => void): grpc.ClientUnaryCall;
    public getChats(request: chat_pb.GetChatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatsResponse) => void): grpc.ClientUnaryCall;
    public getChats(request: chat_pb.GetChatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatsResponse) => void): grpc.ClientUnaryCall;
    public streamChats(request: chat_pb.GetChatsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsResponse>;
    public streamChats(request: chat_pb.GetChatsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.GetChatsResponse>;
    public getChatMessages(request: chat_pb.GetChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatMessagesResponse) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: chat_pb.GetChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatMessagesResponse) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: chat_pb.GetChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.GetChatMessagesResponse) => void): grpc.ClientUnaryCall;
    public setChatTitle(request: chat_pb.SetChatTitleRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.SetChatTitleResponse) => void): grpc.ClientUnaryCall;
    public setChatTitle(request: chat_pb.SetChatTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.SetChatTitleResponse) => void): grpc.ClientUnaryCall;
    public setChatTitle(request: chat_pb.SetChatTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.SetChatTitleResponse) => void): grpc.ClientUnaryCall;
    public addMessage(request: chat_pb.AddMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageResponse) => void): grpc.ClientUnaryCall;
    public addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageResponse) => void): grpc.ClientUnaryCall;
    public addMessage(request: chat_pb.AddMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.AddMessageResponse) => void): grpc.ClientUnaryCall;
}
