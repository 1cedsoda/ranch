"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptResponseEz = exports.PromptRequestEz = exports.GetStateResponseEz = exports.GetStateRequestEz = void 0;
const alpaca_pb_1 = require("../../gen/alpaca_pb");
class GetStateRequestEz extends alpaca_pb_1.GetStateRequest {
    constructor(id) {
        super();
        this.id = id;
    }
}
exports.GetStateRequestEz = GetStateRequestEz;
Object.defineProperty(alpaca_pb_1.GetStateRequest.prototype, 'id', {
    get() { return this.getId(); },
    set(id) { this.setId(id); },
});
class GetStateResponseEz extends alpaca_pb_1.GetStateResponse {
    constructor(id, state) {
        super();
        this.id = id;
        this.state = state;
    }
}
exports.GetStateResponseEz = GetStateResponseEz;
Object.defineProperty(alpaca_pb_1.GetStateResponse.prototype, 'id', {
    get() { return this.getId(); },
    set(id) { this.setId(id); },
});
Object.defineProperty(alpaca_pb_1.GetStateResponse.prototype, 'state', {
    get() { return this.getState(); },
    set(state) { this.setState(state); },
});
class PromptRequestEz extends alpaca_pb_1.PromptRequest {
    constructor(id, prompt) {
        super();
        this.id = id;
        this.prompt = prompt;
    }
}
exports.PromptRequestEz = PromptRequestEz;
Object.defineProperty(alpaca_pb_1.PromptRequest.prototype, 'id', {
    get() { return this.getId(); },
    set(id) { this.setId(id); },
});
Object.defineProperty(alpaca_pb_1.PromptRequest.prototype, 'prompt', {
    get() { return this.getPrompt(); },
    set(prompt) { this.setPrompt(prompt); },
});
class PromptResponseEz extends alpaca_pb_1.PromptResponse {
    constructor(text) {
        super();
        this.text = text;
    }
}
exports.PromptResponseEz = PromptResponseEz;
Object.defineProperty(alpaca_pb_1.PromptResponse.prototype, 'text', {
    get() { return this.getText(); },
    set(text) { this.setText(text); },
});
