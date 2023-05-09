import { AlpacaState } from "ranch-proto/dist/pb"

export enum AlpacaRunnerState {
  INIT,
  READY,
  RUNNING,
}

export function alpacaStateToProto (state: AlpacaRunnerState): AlpacaState {
  switch (state) {
    case AlpacaRunnerState.READY: return AlpacaState.READY
    case AlpacaRunnerState.RUNNING: return AlpacaState.RUNNING
    case AlpacaRunnerState.INIT: return AlpacaState.INIT
  }
}

export function alpacaStateFromProto (_proto: AlpacaState): AlpacaRunnerState {
  switch (_proto) {
    case AlpacaState.READY: return AlpacaRunnerState.READY
    case AlpacaState.RUNNING: return AlpacaRunnerState.RUNNING
    case AlpacaState.INIT: return AlpacaRunnerState.INIT
  }
}
