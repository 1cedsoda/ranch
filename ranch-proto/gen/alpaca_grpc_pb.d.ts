// package: 
// file: alpaca.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as alpaca_pb from "./alpaca_pb";

interface IAlpacaService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getState: IAlpacaService_IGetState;
    streamState: IAlpacaService_IStreamState;
    prompt: IAlpacaService_IPrompt;
}

interface IAlpacaService_IGetState extends grpc.MethodDefinition<alpaca_pb.GetStateRequest, alpaca_pb.GetStateResponse> {
    path: "/Alpaca/GetState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<alpaca_pb.GetStateRequest>;
    requestDeserialize: grpc.deserialize<alpaca_pb.GetStateRequest>;
    responseSerialize: grpc.serialize<alpaca_pb.GetStateResponse>;
    responseDeserialize: grpc.deserialize<alpaca_pb.GetStateResponse>;
}
interface IAlpacaService_IStreamState extends grpc.MethodDefinition<alpaca_pb.GetStateRequest, alpaca_pb.GetStateResponse> {
    path: "/Alpaca/StreamState";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<alpaca_pb.GetStateRequest>;
    requestDeserialize: grpc.deserialize<alpaca_pb.GetStateRequest>;
    responseSerialize: grpc.serialize<alpaca_pb.GetStateResponse>;
    responseDeserialize: grpc.deserialize<alpaca_pb.GetStateResponse>;
}
interface IAlpacaService_IPrompt extends grpc.MethodDefinition<alpaca_pb.PromptRequest, alpaca_pb.PromptResponse> {
    path: "/Alpaca/Prompt";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<alpaca_pb.PromptRequest>;
    requestDeserialize: grpc.deserialize<alpaca_pb.PromptRequest>;
    responseSerialize: grpc.serialize<alpaca_pb.PromptResponse>;
    responseDeserialize: grpc.deserialize<alpaca_pb.PromptResponse>;
}

export const AlpacaService: IAlpacaService;

export interface IAlpacaServer extends grpc.UntypedServiceImplementation {
    getState: grpc.handleUnaryCall<alpaca_pb.GetStateRequest, alpaca_pb.GetStateResponse>;
    streamState: grpc.handleServerStreamingCall<alpaca_pb.GetStateRequest, alpaca_pb.GetStateResponse>;
    prompt: grpc.handleServerStreamingCall<alpaca_pb.PromptRequest, alpaca_pb.PromptResponse>;
}

export interface IAlpacaClient {
    getState(request: alpaca_pb.GetStateRequest, callback: (error: grpc.ServiceError | null, response: alpaca_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    getState(request: alpaca_pb.GetStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: alpaca_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    getState(request: alpaca_pb.GetStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: alpaca_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    streamState(request: alpaca_pb.GetStateRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.GetStateResponse>;
    streamState(request: alpaca_pb.GetStateRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.GetStateResponse>;
    prompt(request: alpaca_pb.PromptRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.PromptResponse>;
    prompt(request: alpaca_pb.PromptRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.PromptResponse>;
}

export class AlpacaClient extends grpc.Client implements IAlpacaClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getState(request: alpaca_pb.GetStateRequest, callback: (error: grpc.ServiceError | null, response: alpaca_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    public getState(request: alpaca_pb.GetStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: alpaca_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    public getState(request: alpaca_pb.GetStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: alpaca_pb.GetStateResponse) => void): grpc.ClientUnaryCall;
    public streamState(request: alpaca_pb.GetStateRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.GetStateResponse>;
    public streamState(request: alpaca_pb.GetStateRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.GetStateResponse>;
    public prompt(request: alpaca_pb.PromptRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.PromptResponse>;
    public prompt(request: alpaca_pb.PromptRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.PromptResponse>;
}
