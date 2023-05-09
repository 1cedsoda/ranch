import * as proto from "../../gen/alpaca_pb";
export declare class GetStateRequest {
    id: string;
    constructor(id: string);
    static fromProto(proto: proto.GetStateRequest): GetStateRequest;
    get proto(): proto.GetStateRequest;
}
export declare class GetStateResponse {
    id: string;
    state: proto.AlpacaState;
    constructor(id: string, state: proto.AlpacaState);
    static fromProto(proto: proto.GetStateResponse): GetStateResponse;
    get proto(): proto.GetStateResponse;
}
export declare class PromptRequest {
    id: string;
    prompt: string;
    constructor(id: string, prompt: string);
    static fromProto(proto: proto.PromptRequest): PromptRequest;
    get proto(): proto.PromptRequest;
}
export declare class PromptResponse {
    text: string;
    constructor(text: string);
    static fromProto(proto: proto.PromptResponse): PromptResponse;
    get proto(): proto.PromptResponse;
}
