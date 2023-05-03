// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Message extends jspb.Message { 
    getSender(): Sender;
    setSender(value: Sender): Message;

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
        sender: Sender,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        text: string,
    }
}

export class ChatObject extends jspb.Message { 
    getId(): string;
    setId(value: string): ChatObject;
    getUsername(): string;
    setUsername(value: string): ChatObject;
    clearMessagesList(): void;
    getMessagesList(): Array<Message>;
    setMessagesList(value: Array<Message>): ChatObject;
    addMessages(value?: Message, index?: number): Message;

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
        username: string,
        messagesList: Array<Message.AsObject>,
    }
}

export class GetChatsRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): GetChatsRequest;

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
        username: string,
    }
}

export class GetChatsReply extends jspb.Message { 
    clearChatidsList(): void;
    getChatidsList(): Array<string>;
    setChatidsList(value: Array<string>): GetChatsReply;
    addChatids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatsReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatsReply): GetChatsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatsReply;
    static deserializeBinaryFromReader(message: GetChatsReply, reader: jspb.BinaryReader): GetChatsReply;
}

export namespace GetChatsReply {
    export type AsObject = {
        chatidsList: Array<string>,
    }
}

export class GetChatRequest extends jspb.Message { 
    getChatid(): string;
    setChatid(value: string): GetChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatRequest): GetChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatRequest;
    static deserializeBinaryFromReader(message: GetChatRequest, reader: jspb.BinaryReader): GetChatRequest;
}

export namespace GetChatRequest {
    export type AsObject = {
        chatid: string,
    }
}

export class GetChatReply extends jspb.Message { 

    hasChat(): boolean;
    clearChat(): void;
    getChat(): ChatObject | undefined;
    setChat(value?: ChatObject): GetChatReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetChatReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetChatReply): GetChatReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetChatReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetChatReply;
    static deserializeBinaryFromReader(message: GetChatReply, reader: jspb.BinaryReader): GetChatReply;
}

export namespace GetChatReply {
    export type AsObject = {
        chat?: ChatObject.AsObject,
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

export class AddMessageReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMessageReply.AsObject;
    static toObject(includeInstance: boolean, msg: AddMessageReply): AddMessageReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMessageReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMessageReply;
    static deserializeBinaryFromReader(message: AddMessageReply, reader: jspb.BinaryReader): AddMessageReply;
}

export namespace AddMessageReply {
    export type AsObject = {
    }
}

export enum Sender {
    USER = 0,
    BOT = 1,
}
