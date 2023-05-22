import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { AddMessageResponse, AddMessageRequest, ChatObject, GetChatsResponse, GetChatsRequest, Message, MessageSender, GetChatMessagesRequest, GetChatMessagesResponse, SetChatTitleRequest, SetChatTitleResponse, CreateChatRequest, CreateChatResponse } from "../../gen/chat_pb";
export declare class MessageEz extends Message {
    id: string;
    chatId: string;
    sender: MessageSender;
    timestamp: Timestamp;
    text: string;
    constructor(id: string, chatId: string, sender: MessageSender, timestamp: Timestamp, text: string);
}
export declare class ChatObjectEz extends ChatObject {
    id: string;
    userId: string;
    timestamp: Timestamp;
    title: string | null;
    constructor(id: string, userId: string, timestamp: Timestamp, title: string | null);
}
export declare class CreateChatRequestEz extends CreateChatRequest {
    userId: string;
    constructor(userId: string);
}
export declare class CreateChatResponseEz extends CreateChatResponse {
    chat: ChatObject;
    constructor(chat: ChatObject);
}
export declare class GetChatsRequestEz extends GetChatsRequest {
    userId: string;
    constructor(userId: string);
}
export declare class GetChatsResponseEz extends GetChatsResponse {
    chats: ChatObject[];
    constructor(chats: ChatObject[]);
}
export declare class GetChatMessagesRequestEz extends GetChatMessagesRequest {
    chatId: string;
    constructor(chatId: string);
}
export declare class GetChatMessagesResponseEz extends GetChatMessagesResponse {
    messages: Message[];
    constructor(messages: Message[]);
}
export declare class SetChatTitleRequestEz extends SetChatTitleRequest {
    chatId: string;
    title: string;
    constructor(chatId: string, title: string);
}
export declare class SetChatTitleResponseEz extends SetChatTitleResponse {
}
export declare class AddMessageRequestEz extends AddMessageRequest {
    chatId: string;
    text: string;
    sender: MessageSender;
    constructor(chatId: string, text: string, sender: MessageSender);
}
export declare class AddMessageResponseEz extends AddMessageResponse {
    message: Message;
    constructor(message: Message);
}
