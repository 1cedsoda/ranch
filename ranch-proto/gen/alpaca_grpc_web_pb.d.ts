import * as grpcWeb from 'grpc-web';

import * as alpaca_pb from './alpaca_pb';


export class AlpacaClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: alpaca_pb.GetStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alpaca_pb.GetStateResponse) => void
  ): grpcWeb.ClientReadableStream<alpaca_pb.GetStateResponse>;

  streamState(
    request: alpaca_pb.GetStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alpaca_pb.GetStateResponse>;

  prompt(
    request: alpaca_pb.PromptRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alpaca_pb.PromptResponse>;

}

export class AlpacaPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: alpaca_pb.GetStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alpaca_pb.GetStateResponse>;

  streamState(
    request: alpaca_pb.GetStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alpaca_pb.GetStateResponse>;

  prompt(
    request: alpaca_pb.PromptRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alpaca_pb.PromptResponse>;

}

