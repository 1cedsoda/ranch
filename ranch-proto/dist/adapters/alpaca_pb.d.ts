import * as alpaca_pb from '../../gen/alpaca_pb';
export declare class GetStateRequest extends alpaca_pb.GetStateRequest {
    constructor(id: string);
    get id(): string;
}
export declare class GetStateResponse extends alpaca_pb.GetStateResponse {
    constructor(id: string, state: alpaca_pb.AlpacaState);
    get id(): string;
    get state(): alpaca_pb.AlpacaState;
}
export declare class PromptRequest extends alpaca_pb.PromptRequest {
    constructor(id: string, prompt: string);
    get id(): string;
    get prompt(): string;
}
export declare class PromptResponse extends alpaca_pb.PromptResponse {
    constructor(text: string);
    get text(): string;
}
export type AlpacaState = alpaca_pb.AlpacaState;
