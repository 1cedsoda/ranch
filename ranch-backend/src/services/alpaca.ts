import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, handleServerStreamingCall, handleUnaryCall, loadPackageDefinition, sendUnaryData } from '@grpc/grpc-js'
import { IAlpacaServer } from 'ranch-proto/dist/grpc'
import { GetStateRequest, GetStateRequestEz, GetStateResponse, GetStateResponseEz, PromptRequest, PromptRequestEz, PromptResponse, PromptResponseEz } from 'ranch-proto/dist/pb'
import { alpacaRunnerManager } from '../alpaca/runner_manager'
import { alpacaStateToProto } from '../alpaca/runner_state'
import { AlpacaRunner } from '../alpaca/runner'
import { UntypedHandleCall } from '@grpc/grpc-js'
export class AlpacaServer implements IAlpacaServer {
  [name: string]: UntypedHandleCall
  getState (call: ServerUnaryCall<GetStateRequest, GetStateResponse>, callback: sendUnaryData<GetStateResponse>) {
    const req = call.request as GetStateRequestEz
    console.log('AlpacaServer.getState', req.toObject())

    const runner = alpacaRunnerManager.getRunner(req.id)

    if (runner == null) {
      callback(new Error('Runner not found'), null)
      return
    }

    callback(null, runnerToStateResponse(req.id, runner))
  }

  streamState (call: ServerWritableStream<GetStateRequest, GetStateResponse>) {
    const req = call.request as GetStateRequestEz
    console.log('AlpacaServer.streamState', req.toObject())

    const runner = alpacaRunnerManager.getRunner(req.id)

    if (runner == null) {
      return call.end()
    }

    let reply = runnerToStateResponse(req.id, runner)

    runner.onStateChange((state) => {
      reply = runnerToStateResponse(req.id, runner)
      call.write(reply)
    })
  }

  prompt (call: ServerWritableStream<PromptRequest, PromptResponse>) {
    const req = call.request as PromptRequestEz
    console.log('AlpacaServer.prompt', req.toObject())

    const prompt = req.prompt
    const runner = alpacaRunnerManager.getRunner(req.id)

    if (runner == null) {
      return call.end()
    }

    runner.prompt(prompt, (text) => {
      const res = new PromptResponseEz(text)
      call.write(res)
    }, () => {
      call.end()
    })
  }
}

const runnerToStateResponse = (id: string, runner: AlpacaRunner): GetStateResponse => new GetStateResponseEz(id, alpacaStateToProto(runner.state))
