import * as proto from 'ranch-proto';

export enum AlpacaRunnerState {
    INIT,
    READY,
    RUNNING,
}

export function alpacaStateToProto(state: AlpacaRunnerState): proto.AlpacaState {
    switch (state) {
        case AlpacaRunnerState.READY: return proto.AlpacaState.READY;
        case AlpacaRunnerState.RUNNING: return proto.AlpacaState.RUNNING;
        case AlpacaRunnerState.INIT: return proto.AlpacaState.INIT;
    }
}

export function alpacaStateFromProto(_proto: proto.AlpacaState): AlpacaRunnerState {
    switch (_proto) {
        case proto.AlpacaState.READY: return AlpacaRunnerState.READY;
        case proto.AlpacaState.RUNNING: return AlpacaRunnerState.RUNNING;
        case proto.AlpacaState.INIT: return AlpacaRunnerState.INIT;
    }
}

