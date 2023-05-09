"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptResponseEz = exports.PromptRequestEz = exports.GetStateResponseEz = exports.GetStateRequestEz = void 0;
const alpaca_pb_1 = require("../../gen/alpaca_pb");
class GetStateRequestEz extends alpaca_pb_1.GetStateRequest {
    constructor(id) {
        super();
        this.id = id;
    }
    get id() {
        return this.getId();
    }
    set id(id) {
        this.setId(id);
    }
}
exports.GetStateRequestEz = GetStateRequestEz;
class GetStateResponseEz extends alpaca_pb_1.GetStateResponse {
    constructor(id, state) {
        super();
        this.id = id;
        this.state = state;
    }
    get id() {
        return this.getId();
    }
    set id(id) {
        this.setId(id);
    }
    get state() {
        return this.getState();
    }
    set state(state) {
        this.setState(state);
    }
}
exports.GetStateResponseEz = GetStateResponseEz;
class PromptRequestEz extends alpaca_pb_1.PromptRequest {
    constructor(id, prompt) {
        super();
        this.id = id;
        this.prompt = prompt;
    }
    get id() {
        return this.getId();
    }
    set id(id) {
        this.setId(id);
    }
    get prompt() {
        return this.getPrompt();
    }
    set prompt(prompt) {
        this.setPrompt(prompt);
    }
}
exports.PromptRequestEz = PromptRequestEz;
class PromptResponseEz extends alpaca_pb_1.PromptResponse {
    constructor(text) {
        super();
        this.text = text;
    }
    get text() {
        return this.getText();
    }
    set text(text) {
        this.setText(text);
    }
}
exports.PromptResponseEz = PromptResponseEz;
