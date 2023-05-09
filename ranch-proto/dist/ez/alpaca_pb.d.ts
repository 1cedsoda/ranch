import { AlpacaState, GetStateRequest, GetStateResponse, PromptRequest, PromptResponse } from '../../gen/alpaca_pb';
export declare class GetStateRequestEz extends GetStateRequest {
    constructor(id: string);
    get id(): string;
    set id(id: string);
}
export declare class GetStateResponseEz extends GetStateResponse {
    constructor(id: string, state: AlpacaState);
    get id(): string;
    set id(id: string);
    get state(): AlpacaState;
    set state(state: AlpacaState);
}
export declare class PromptRequestEz extends PromptRequest {
    constructor(id: string, prompt: string);
    get id(): string;
    set id(id: string);
    get prompt(): string;
    set prompt(prompt: string);
}
export declare class PromptResponseEz extends PromptResponse {
    constructor(text: string);
    get text(): string;
    set text(text: string);
}
