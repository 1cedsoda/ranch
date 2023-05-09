import { AlpacaState, GetStateRequest, GetStateResponse, PromptRequest, PromptResponse } from '../../gen/alpaca_pb';
export declare class GetStateRequestEz extends GetStateRequest {
    id: string;
    constructor(id: string);
}
export declare class GetStateResponseEz extends GetStateResponse {
    id: string;
    state: AlpacaState;
    constructor(id: string, state: AlpacaState);
}
export declare class PromptRequestEz extends PromptRequest {
    id: string;
    prompt: string;
    constructor(id: string, prompt: string);
}
export declare class PromptResponseEz extends PromptResponse {
    text: string;
    constructor(text: string);
}
