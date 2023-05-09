import { AlpacaState, GetStateRequest, GetStateResponse, PromptRequest, PromptResponse } from '../../gen/alpaca_pb'

export class GetStateRequestEz extends GetStateRequest {
    constructor(id: string) {
        super()
        this.id = id
    }
    get id(): string {
        return this.getId()
    }
    set id(id: string) {
        this.setId(id)
    }
}

export class GetStateResponseEz extends GetStateResponse {
    constructor(id: string, state: AlpacaState) {
        super()
        this.id = id
        this.state = state
    }
    get id(): string {
        return this.getId()
    }
    set id(id: string) {
        this.setId(id)
    }
    get state(): AlpacaState {
        return this.getState()
    }
    set state(state: AlpacaState) {
        this.setState(state)
    }
}

export class PromptRequestEz extends PromptRequest {
    constructor(id: string, prompt: string) {
        super()
        this.id = id
        this.prompt = prompt
    }
    get id(): string {
        return this.getId()
    }
    set id(id: string) {
        this.setId(id)
    }
    get prompt(): string {
        return this.getPrompt()
    }
    set prompt(prompt: string) {
        this.setPrompt(prompt)
    }
}

export class PromptResponseEz extends PromptResponse {
    constructor(text: string) {
        super()
        this.text = text
    }
    get text(): string {
        return this.getText()
    }
    set text(text: string) {
        this.setText(text)
    }
}