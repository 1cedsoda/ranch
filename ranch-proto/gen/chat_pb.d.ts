// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Message extends jspb.Message { 
    getId(): string;
    setId(value: string): Message;
    getChatid(): string;
    setChatid(value: string): Message;
    getSender(): MessageSender;
    setSender(value: MessageSender): Message;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Message;
    getText(): string;
    setText(value: string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        id: string,
        chatid: string,
        sender: MessageSender,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        text: string,
    }
}

export class ChatObject extends jspb.Message { 
    getId(): string;
    setId(value: string): ChatObject;
    getUserid(): string;
    setUserid(value: string): ChatObject;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ChatObject;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): string | undefined;
    setTitle(value: string): ChatObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatObject.AsObject;
    static toObject(includeInstance: boolean, msg: ChatObject): ChatObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatObject;
    static deserializeBinaryFromReader(message: ChatObject, reader: jspb.BinaryReader): ChatObject;
}

export namespace ChatObject {
    export type AsObject = {
        id: string,
        userid: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        title?: string,
    }
}

export class GetChatsRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): GetChatsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatsRequest): GetChatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatsRequest;
    static deserializeBinaryFromReader(message: GetChatsRequest, reader: jspb.BinaryReader): GetChatsRequest;
}

export namespace GetChatsRequest {
    export type AsObject = {
        userid: string,
    }
}

export class GetChatsResponse extends jspb.Message { 
    clearChatsList(): void;
    getChatsList(): Array<ChatObject>;
    setChatsList(value: Array<ChatObject>): GetChatsResponse;
    addChats(value?: ChatObject, index?: number): ChatObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatsResponse): GetChatsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatsResponse;
    static deserializeBinaryFromReader(message: GetChatsResponse, reader: jspb.BinaryReader): GetChatsResponse;
}

export namespace GetChatsResponse {
    export type AsObject = {
        chatsList: Array<ChatObject.AsObject>,
    }
}

export class GetChatMessagesRequest extends jspb.Message { 
    getChatid(): string;
    setChatid(value: string): GetChatMessagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatMessagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatMessagesRequest): GetChatMessagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatMessagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatMessagesRequest;
    static deserializeBinaryFromReader(message: GetChatMessagesRequest, reader: jspb.BinaryReader): GetChatMessagesRequest;
}

export namespace GetChatMessagesRequest {
    export type AsObject = {
        chatid: string,
    }
}

export class GetChatMessagesResponse extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<Message>;
    setMessagesList(value: Array<Message>): GetChatMessagesResponse;
    addMessages(value?: Message, index?: number): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatMessagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatMessagesResponse): GetChatMessagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatMessagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatMessagesResponse;
    static deserializeBinaryFromReader(message: GetChatMessagesResponse, reader: jspb.BinaryReader): GetChatMessagesResponse;
}

export namespace GetChatMessagesResponse {
    export type AsObject = {
        messagesList: Array<Message.AsObject>,
    }
}

export class SetChatTitleRequest extends jspb.Message { 
    getChatid(): string;
    setChatid(value: string): SetChatTitleRequest;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): string | undefined;
    setTitle(value: string): SetChatTitleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetChatTitleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetChatTitleRequest): SetChatTitleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetChatTitleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetChatTitleRequest;
    static deserializeBinaryFromReader(message: SetChatTitleRequest, reader: jspb.BinaryReader): SetChatTitleRequest;
}

export namespace SetChatTitleRequest {
    export type AsObject = {
        chatid: string,
        title?: string,
    }
}

export class SetChatTitleResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetChatTitleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetChatTitleResponse): SetChatTitleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetChatTitleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetChatTitleResponse;
    static deserializeBinaryFromReader(message: SetChatTitleResponse, reader: jspb.BinaryReader): SetChatTitleResponse;
}

export namespace SetChatTitleResponse {
    export type AsObject = {
    }
}

export class AddMessageRequest extends jspb.Message { 
    getChatid(): string;
    setChatid(value: string): AddMessageRequest;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): Message | undefined;
    setMessage(value?: Message): AddMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddMessageRequest): AddMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMessageRequest;
    static deserializeBinaryFromReader(message: AddMessageRequest, reader: jspb.BinaryReader): AddMessageRequest;
}

export namespace AddMessageRequest {
    export type AsObject = {
        chatid: string,
        message?: Message.AsObject,
    }
}

export class AddMessageResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddMessageResponse): AddMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMessageResponse;
    static deserializeBinaryFromReader(message: AddMessageResponse, reader: jspb.BinaryReader): AddMessageResponse;
}

export namespace AddMessageResponse {
    export type AsObject = {
    }
}

export enum MessageSender {
    USER = 0,
    BOT = 1,
}
