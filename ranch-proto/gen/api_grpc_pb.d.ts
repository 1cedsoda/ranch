// package: 
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as api_pb from "./api_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayHelloStreamReply: IGreeterService_ISayHelloStreamReply;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<api_pb.HelloRequest, api_pb.HelloReply> {
    path: "/Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<api_pb.HelloReply>;
}
interface IGreeterService_ISayHelloStreamReply extends grpc.MethodDefinition<api_pb.HelloRequest, api_pb.HelloReply> {
    path: "/Greeter/SayHelloStreamReply";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<api_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<api_pb.HelloRequest, api_pb.HelloReply>;
    sayHelloStreamReply: grpc.handleServerStreamingCall<api_pb.HelloRequest, api_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: api_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: api_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: api_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHelloStreamReply(request: api_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.HelloReply>;
    sayHelloStreamReply(request: api_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.HelloReply>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: api_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: api_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: api_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHelloStreamReply(request: api_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.HelloReply>;
    public sayHelloStreamReply(request: api_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.HelloReply>;
}
