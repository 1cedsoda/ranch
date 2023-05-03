// package: 
// file: alpaca.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AlpacaGetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AlpacaGetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlpacaGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AlpacaGetRequest): AlpacaGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlpacaGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlpacaGetRequest;
    static deserializeBinaryFromReader(message: AlpacaGetRequest, reader: jspb.BinaryReader): AlpacaGetRequest;
}

export namespace AlpacaGetRequest {
    export type AsObject = {
        id: string,
    }
}

export class AlpacaGetReply extends jspb.Message { 
    getId(): string;
    setId(value: string): AlpacaGetReply;
    getState(): AlpacaState;
    setState(value: AlpacaState): AlpacaGetReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlpacaGetReply.AsObject;
    static toObject(includeInstance: boolean, msg: AlpacaGetReply): AlpacaGetReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlpacaGetReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlpacaGetReply;
    static deserializeBinaryFromReader(message: AlpacaGetReply, reader: jspb.BinaryReader): AlpacaGetReply;
}

export namespace AlpacaGetReply {
    export type AsObject = {
        id: string,
        state: AlpacaState,
    }
}

export class AlpacaPromptRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AlpacaPromptRequest;
    getPrompt(): string;
    setPrompt(value: string): AlpacaPromptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlpacaPromptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AlpacaPromptRequest): AlpacaPromptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlpacaPromptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlpacaPromptRequest;
    static deserializeBinaryFromReader(message: AlpacaPromptRequest, reader: jspb.BinaryReader): AlpacaPromptRequest;
}

export namespace AlpacaPromptRequest {
    export type AsObject = {
        id: string,
        prompt: string,
    }
}

export class AlpacaPromptReply extends jspb.Message { 
    getText(): string;
    setText(value: string): AlpacaPromptReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlpacaPromptReply.AsObject;
    static toObject(includeInstance: boolean, msg: AlpacaPromptReply): AlpacaPromptReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlpacaPromptReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlpacaPromptReply;
    static deserializeBinaryFromReader(message: AlpacaPromptReply, reader: jspb.BinaryReader): AlpacaPromptReply;
}

export namespace AlpacaPromptReply {
    export type AsObject = {
        text: string,
    }
}

export enum AlpacaState {
    INIT = 0,
    READY = 1,
    RUNNING = 2,
}
