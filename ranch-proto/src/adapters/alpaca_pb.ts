import * as alpaca_pb from '../../gen/alpaca_pb'

export class GetStateRequest extends alpaca_pb.GetStateRequest {
    constructor(id: string) {
        super()
        this.setId(id)
    }
    get id(): string {
        return this.getId()
    }
}

export class GetStateResponse extends alpaca_pb.GetStateResponse {
    constructor(id: string, state: alpaca_pb.AlpacaState) {
        super()
        this.setId(id)
        this.setState(state)
    }
    get id(): string {
        return this.getId()
    }
    get state(): alpaca_pb.AlpacaState {
        return this.getState()
    }
}

export class PromptRequest extends alpaca_pb.PromptRequest {
    constructor(id: string, prompt: string) {
        super()
        this.setId(id)
        this.setPrompt(prompt)
    }
    get id(): string {
        return this.getId()
    }
    get prompt(): string {
        return this.getPrompt()
    }
}

export class PromptResponse extends alpaca_pb.PromptResponse {
    constructor(text: string) {
        super()
        this.setText(text)
    }
    get text(): string {
        return this.getText()
    }
}

export type AlpacaState = alpaca_pb.AlpacaState