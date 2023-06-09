import { ServerWritableStream } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';

export function endWithStatus(call: ServerWritableStream<any, any>, code: Status, error: string | Error | undefined): void {
    call.destroy(
        error ? new Error(error.toString()) : undefined,
    );
}