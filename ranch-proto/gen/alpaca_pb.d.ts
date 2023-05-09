// package: 
// file: alpaca.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetStateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStateRequest): GetStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStateRequest;
    static deserializeBinaryFromReader(message: GetStateRequest, reader: jspb.BinaryReader): GetStateRequest;
}

export namespace GetStateRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetStateResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetStateResponse;
    getState(): AlpacaState;
    setState(value: AlpacaState): GetStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStateResponse): GetStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStateResponse;
    static deserializeBinaryFromReader(message: GetStateResponse, reader: jspb.BinaryReader): GetStateResponse;
}

export namespace GetStateResponse {
    export type AsObject = {
        id: string,
        state: AlpacaState,
    }
}

export class PromptRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): PromptRequest;
    getPrompt(): string;
    setPrompt(value: string): PromptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PromptRequest): PromptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromptRequest;
    static deserializeBinaryFromReader(message: PromptRequest, reader: jspb.BinaryReader): PromptRequest;
}

export namespace PromptRequest {
    export type AsObject = {
        id: string,
        prompt: string,
    }
}

export class PromptResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): PromptResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PromptResponse): PromptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromptResponse;
    static deserializeBinaryFromReader(message: PromptResponse, reader: jspb.BinaryReader): PromptResponse;
}

export namespace PromptResponse {
    export type AsObject = {
        text: string,
    }
}

export enum AlpacaState {
    INIT = 0,
    READY = 1,
    RUNNING = 2,
}
