import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, handleServerStreamingCall, sendUnaryData } from '@grpc/grpc-js';
import { AddMessageReply, AddMessageRequest, GetChatReply, GetChatRequest, GetChatsReply, GetChatsRequest, IChatServer } from 'ranch-proto'

export class ChatServer implements IChatServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    getChats(call: ServerWritableStream<GetChatsRequest, GetChatsReply>) {
    
    }
    getChat(call: ServerUnaryCall<GetChatRequest, GetChatReply>, callback: sendUnaryData<GetChatReply>) {

    };
    addMessage(call: ServerUnaryCall<AddMessageRequest, AddMessageReply>, callback: sendUnaryData<AddMessageReply>) {

    };
    
}