import * as proto from "../../gen/alpaca_pb";

// message GetStateRequest {
//   string id = 1;
// }
export class GetStateRequest {
    id: string;
    constructor(id: string) {
        this.id = id;
    }
    static fromProto(proto: proto.GetStateRequest): GetStateRequest {
        return new GetStateRequest(proto.getId());
    }
    get proto(): proto.GetStateRequest {
        return new proto.GetStateRequest()
            .setId(this.id);
    }
}

// message GetStateResponse {
//   string id = 1;
//   AlpacaState state = 2;
// }
export class GetStateResponse {
    id: string;
    state: proto.AlpacaState;
    constructor(id: string, state: proto.AlpacaState) {
        this.id = id;
        this.state = state;
    }
    static fromProto(proto: proto.GetStateResponse): GetStateResponse {
        return new GetStateResponse(proto.getId(), proto.getState());
    }
    get proto(): proto.GetStateResponse {
        return new proto.GetStateResponse()
            .setId(this.id)
            .setState(this.state);
    }
}

// message PromptRequest {
//   string id = 1;
//   string prompt = 2;
// }
export class PromptRequest {
    id: string;
    prompt: string;
    constructor(id: string, prompt: string) {
        this.id = id;
        this.prompt = prompt;
    }
    static fromProto(proto: proto.PromptRequest): PromptRequest {
        return new PromptRequest(proto.getId(), proto.getPrompt());
    }
    get proto (): proto.PromptRequest {
        return new proto.PromptRequest()
            .setId(this.id)
            .setPrompt(this.prompt);
    }
}

// message PromptResponse {
//   string text = 1;
// }
export class PromptResponse {
    text: string;
    constructor(text: string) {
        this.text = text;
    }
    static fromProto(proto: proto.PromptResponse): PromptResponse {
        return new PromptResponse(proto.getText());
    }
    get proto (): proto.PromptResponse {
        return new proto.PromptResponse()
            .setText(this.text);
    }
}