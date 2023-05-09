import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, handleServerStreamingCall, handleUnaryCall, loadPackageDefinition, sendUnaryData } from '@grpc/grpc-js';
import { AlpacaState, GetStateRequest, GetStateResponse, IAlpacaServer, PromptRequest, PromptResponse } from 'ranch-proto'
import { alpacaRunnerManager } from '../alpaca/runner_manager';
import { alpacaStateToProto } from '../alpaca/runner_state';
import { AlpacaRunner } from '../alpaca/runner';
import { UntypedHandleCall } from '@grpc/grpc-js';
import * as models from 'ranch-proto/dist/models';

export class AlpacaServer implements IAlpacaServer {
    [name: string]: UntypedHandleCall;
    getState(call: ServerUnaryCall<GetStateRequest, GetStateResponse>, callback: sendUnaryData<GetStateResponse>) {
        const id = call.request.getId();
        const runner = alpacaRunnerManager.getRunner(id)

        if (!runner) {
            callback(new Error('Runner not found'), null);
            return
        }

        callback(null, runnerToStateResponse(id, runner));
    }
    streamState(call: ServerWritableStream<GetStateRequest, GetStateResponse>) {

        const id = call.request.getId();
        const runner = alpacaRunnerManager.getRunner(id)

        if (!runner) {
            return call.end();
        }

        let reply = runnerToStateResponse(id, runner);

        runner.onStateChange((state) => {
            reply = runnerToStateResponse(id, runner);
            call.write(reply);
        })
    }
    prompt(call: ServerWritableStream<PromptRequest, PromptResponse>) {
        const id = call.request.getId();
        const prompt = call.request.getPrompt();
        const runner = alpacaRunnerManager.getRunner(id)

        if (!runner) {
            return call.end();
        }

        runner.prompt(prompt, (text)=>{
            const res = new models.PromptResponse(text).proto;
        }, ()=>{
            call.end();
        })
    }
}

const runnerToStateResponse = (id: string, runner: AlpacaRunner): GetStateResponse => new models.GetStateResponse(id, alpacaStateToProto(runner.state)).proto