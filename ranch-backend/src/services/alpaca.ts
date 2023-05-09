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
    const { id } = req
    console.log('AlpacaServer.getState', req.toObject())

    let runner = alpacaRunnerManager.getRunner(id)

    if (runner == null) {
      runner = alpacaRunnerManager.createRunner(id)
    }

    callback(null, runnerToStateResponse(id, runner))
  }

  streamState (call: ServerWritableStream<GetStateRequest, GetStateResponse>) {
    const req = call.request as GetStateRequestEz
    const { id } = req
    console.log('AlpacaServer.streamState', req.toObject())

    let runner = alpacaRunnerManager.getRunner(id)

    if (runner == null) {
      runner = alpacaRunnerManager.createRunner(id)
    }

    let res = runnerToStateResponse(id, runner)
    call.write(res)

    runner.onStateChange((state) => {
      let runner = alpacaRunnerManager.getRunner(id)
      if (runner == null) {
        return call.end()
      }
      res = runnerToStateResponse(id, runner)
      call.write(res)
    })
  }

  prompt (call: ServerWritableStream<PromptRequest, PromptResponse>) {
    const req = call.request as PromptRequestEz
    const { id } = req
    console.log('AlpacaServer.prompt', req.toObject())

    const prompt = req.prompt
    const runner = alpacaRunnerManager.getRunner(id)

    if (runner == null) {
      return call.end()
    }

    runner.prompt(prompt, (text) => {
      const res = new PromptResponseEz(text)
      call.write(res)
    }, () => {
      call.end()
    }, (error) => {
      call.end()
    })
  }
}

const runnerToStateResponse = (id: string, runner: AlpacaRunner): GetStateResponse => new GetStateResponseEz(id, alpacaStateToProto(runner.state))
