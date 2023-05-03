import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, loadPackageDefinition, sendUnaryData } from '@grpc/grpc-js';
import { AlpacaGetReply, AlpacaGetRequest, AlpacaPromptReply, AlpacaPromptRequest, IAlpacaServer } from 'ranch-proto'

export class AlpacaServer implements IAlpacaServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

    getAlpaca(call: ServerUnaryCall<AlpacaGetRequest, AlpacaGetReply>, callback: sendUnaryData<AlpacaGetReply>) {
        callback(null, new AlpacaGetReply());
    }
    streamGetAlpaca(call: ServerWritableStream<AlpacaGetRequest, AlpacaGetReply>) {

    }
    promptAlpaca(call: ServerWritableStream<AlpacaPromptRequest, AlpacaPromptReply>) {

    }
}