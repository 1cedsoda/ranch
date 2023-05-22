import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';


export class AuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<auth_pb.LoginResponse>;

}

export class AuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<auth_pb.LoginResponse>;

}

