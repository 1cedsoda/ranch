import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, loadPackageDefinition, sendUnaryData } from '@grpc/grpc-js';
import { AlpacaGetReply, AlpacaGetRequest, AlpacaPromptReply, AlpacaPromptRequest, AlpacaState, IAlpacaServer } from 'ranch-proto'
import { alpacaRunnerManager } from '../alpaca/runner_manager';
import { AlpacaRunner, AlpacaRunnerState } from '../alpaca/runner';

export class AlpacaServer implements IAlpacaServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

    getAlpaca(call: ServerUnaryCall<AlpacaGetRequest, AlpacaGetReply>, callback: sendUnaryData<AlpacaGetReply>) {
        const id = call.request.getId();
        const runner = alpacaRunnerManager.getRunner(id)

        if (!runner) {
            callback(new Error('Runner not found'), null);
            return
        }

        callback(null, protoAlpacaRunner(id, runner));
    }

    streamGetAlpaca(call: ServerWritableStream<AlpacaGetRequest, AlpacaGetReply>) {

        const id = call.request.getId();
        const runner = alpacaRunnerManager.getRunner(id)

        if (!runner) {
            return call.end();
        }

        let reply = protoAlpacaRunner(id, runner);

        runner.onStateChange((state) => {
            reply = protoAlpacaRunner(id, runner);
            call.write(reply);
        })
    }

    promptAlpaca(call: ServerWritableStream<AlpacaPromptRequest, AlpacaPromptReply>) {
        const id = call.request.getId();
        const prompt = call.request.getPrompt();
        const runner = alpacaRunnerManager.getRunner(id)

        if (!runner) {
            return call.end();
        }

        runner.prompt(prompt, (text)=>{
            const reply = new AlpacaPromptReply()
            .setText(text)
            call.write(reply);
        }, ()=>{
            call.end();
        })
    }
}

function protoAlpacaRunner(id: string, runner: AlpacaRunner): AlpacaGetReply {
    function alpacaStateToGrpc(state: AlpacaRunnerState): AlpacaState {
        switch (state) {
            case AlpacaRunnerState.READY: return AlpacaState.READY;
            case AlpacaRunnerState.RUNNING: return AlpacaState.RUNNING;
            case AlpacaRunnerState.INIT: return AlpacaState.INIT;
        }
    }
    const proto_state = alpacaStateToGrpc(runner.state);
    const reply = new AlpacaGetReply()
    .setId(id)
    .setState(proto_state)
    return reply;
}