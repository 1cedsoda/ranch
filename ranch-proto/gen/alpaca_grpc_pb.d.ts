// package: 
// file: alpaca.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as alpaca_pb from "./alpaca_pb";

interface IAlpacaService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAlpaca: IAlpacaService_IGetAlpaca;
    streamGetAlpaca: IAlpacaService_IStreamGetAlpaca;
    promptAlpaca: IAlpacaService_IPromptAlpaca;
}

interface IAlpacaService_IGetAlpaca extends grpc.MethodDefinition<alpaca_pb.AlpacaGetRequest, alpaca_pb.AlpacaGetReply> {
    path: "/Alpaca/GetAlpaca";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<alpaca_pb.AlpacaGetRequest>;
    requestDeserialize: grpc.deserialize<alpaca_pb.AlpacaGetRequest>;
    responseSerialize: grpc.serialize<alpaca_pb.AlpacaGetReply>;
    responseDeserialize: grpc.deserialize<alpaca_pb.AlpacaGetReply>;
}
interface IAlpacaService_IStreamGetAlpaca extends grpc.MethodDefinition<alpaca_pb.AlpacaGetRequest, alpaca_pb.AlpacaGetReply> {
    path: "/Alpaca/StreamGetAlpaca";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<alpaca_pb.AlpacaGetRequest>;
    requestDeserialize: grpc.deserialize<alpaca_pb.AlpacaGetRequest>;
    responseSerialize: grpc.serialize<alpaca_pb.AlpacaGetReply>;
    responseDeserialize: grpc.deserialize<alpaca_pb.AlpacaGetReply>;
}
interface IAlpacaService_IPromptAlpaca extends grpc.MethodDefinition<alpaca_pb.AlpacaPromptRequest, alpaca_pb.AlpacaPromptReply> {
    path: "/Alpaca/PromptAlpaca";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<alpaca_pb.AlpacaPromptRequest>;
    requestDeserialize: grpc.deserialize<alpaca_pb.AlpacaPromptRequest>;
    responseSerialize: grpc.serialize<alpaca_pb.AlpacaPromptReply>;
    responseDeserialize: grpc.deserialize<alpaca_pb.AlpacaPromptReply>;
}

export const AlpacaService: IAlpacaService;

export interface IAlpacaServer extends grpc.UntypedServiceImplementation {
    getAlpaca: grpc.handleUnaryCall<alpaca_pb.AlpacaGetRequest, alpaca_pb.AlpacaGetReply>;
    streamGetAlpaca: grpc.handleServerStreamingCall<alpaca_pb.AlpacaGetRequest, alpaca_pb.AlpacaGetReply>;
    promptAlpaca: grpc.handleServerStreamingCall<alpaca_pb.AlpacaPromptRequest, alpaca_pb.AlpacaPromptReply>;
}

export interface IAlpacaClient {
    getAlpaca(request: alpaca_pb.AlpacaGetRequest, callback: (error: grpc.ServiceError | null, response: alpaca_pb.AlpacaGetReply) => void): grpc.ClientUnaryCall;
    getAlpaca(request: alpaca_pb.AlpacaGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: alpaca_pb.AlpacaGetReply) => void): grpc.ClientUnaryCall;
    getAlpaca(request: alpaca_pb.AlpacaGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: alpaca_pb.AlpacaGetReply) => void): grpc.ClientUnaryCall;
    streamGetAlpaca(request: alpaca_pb.AlpacaGetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaGetReply>;
    streamGetAlpaca(request: alpaca_pb.AlpacaGetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaGetReply>;
    promptAlpaca(request: alpaca_pb.AlpacaPromptRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaPromptReply>;
    promptAlpaca(request: alpaca_pb.AlpacaPromptRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaPromptReply>;
}

export class AlpacaClient extends grpc.Client implements IAlpacaClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAlpaca(request: alpaca_pb.AlpacaGetRequest, callback: (error: grpc.ServiceError | null, response: alpaca_pb.AlpacaGetReply) => void): grpc.ClientUnaryCall;
    public getAlpaca(request: alpaca_pb.AlpacaGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: alpaca_pb.AlpacaGetReply) => void): grpc.ClientUnaryCall;
    public getAlpaca(request: alpaca_pb.AlpacaGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: alpaca_pb.AlpacaGetReply) => void): grpc.ClientUnaryCall;
    public streamGetAlpaca(request: alpaca_pb.AlpacaGetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaGetReply>;
    public streamGetAlpaca(request: alpaca_pb.AlpacaGetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaGetReply>;
    public promptAlpaca(request: alpaca_pb.AlpacaPromptRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaPromptReply>;
    public promptAlpaca(request: alpaca_pb.AlpacaPromptRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<alpaca_pb.AlpacaPromptReply>;
}
