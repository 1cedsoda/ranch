import { AlpacaState, GetStateRequest, GetStateResponse, PromptRequest, PromptResponse } from '../../gen/alpaca_pb'

export class GetStateRequestEz extends GetStateRequest {
    id: string
    constructor(id: string) {
        super()
        this.id = id
    }
}
Object.defineProperty(GetStateRequest.prototype, 'id', {
    get (this: GetStateRequest) { return this.getId() },
    set (this: GetStateRequest, id: string) { this.setId(id) },
})

export class GetStateResponseEz extends GetStateResponse {
    id: string
    state: AlpacaState
    constructor(id: string, state: AlpacaState) {
        super()
        this.id = id
        this.state = state
    }
}
Object.defineProperty(GetStateResponse.prototype, 'id', {
    get (this: GetStateResponse) { return this.getId() },
    set (this: GetStateResponse, id: string) { this.setId(id) },
})
Object.defineProperty(GetStateResponse.prototype, 'state', {
    get (this: GetStateResponse) { return this.getState() },
    set (this: GetStateResponse, state: AlpacaState) { this.setState(state) },
})


export class PromptRequestEz extends PromptRequest {
    id: string
    prompt: string
    constructor(id: string, prompt: string) {
        super()
        this.id = id
        this.prompt = prompt
    }
}
Object.defineProperty(PromptRequest.prototype, 'id', {
    get (this: PromptRequest) { return this.getId() },
    set (this: PromptRequest, id: string) { this.setId(id) },
})
Object.defineProperty(PromptRequest.prototype, 'prompt', {
    get (this: PromptRequest) { return this.getPrompt() },
    set (this: PromptRequest, prompt: string) { this.setPrompt(prompt) },
})

export class PromptResponseEz extends PromptResponse {
    text: string
    constructor(text: string) {
        super()
        this.text = text
    }
}
Object.defineProperty(PromptResponse.prototype, 'text', {
    get (this: PromptResponse) { return this.getText() },
    set (this: PromptResponse, text: string) { this.setText(text) },
})
