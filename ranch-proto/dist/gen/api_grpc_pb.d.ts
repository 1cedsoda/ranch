export namespace GreeterService {
    namespace sayHello {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof api_pb.HelloRequest;
        export const responseType: typeof api_pb.HelloReply;
        export { serialize_HelloRequest as requestSerialize };
        export { deserialize_HelloRequest as requestDeserialize };
        export { serialize_HelloReply as responseSerialize };
        export { deserialize_HelloReply as responseDeserialize };
    }
    namespace sayHelloStreamReply {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof api_pb.HelloRequest;
        export { requestType_1 as requestType };
        const responseType_1: typeof api_pb.HelloReply;
        export { responseType_1 as responseType };
        export { serialize_HelloRequest as requestSerialize };
        export { deserialize_HelloRequest as requestDeserialize };
        export { serialize_HelloReply as responseSerialize };
        export { deserialize_HelloReply as responseDeserialize };
    }
}
export const GreeterClient: any;
import api_pb = require("./api_pb.js");
declare function serialize_HelloRequest(arg: any): Buffer;
declare function deserialize_HelloRequest(buffer_arg: any): api_pb.HelloRequest;
declare function serialize_HelloReply(arg: any): Buffer;
declare function deserialize_HelloReply(buffer_arg: any): api_pb.HelloReply;
export {};
