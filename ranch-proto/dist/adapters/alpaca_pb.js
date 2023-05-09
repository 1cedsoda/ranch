"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptResponse = exports.PromptRequest = exports.GetStateResponse = exports.GetStateRequest = void 0;
const alpaca_pb = __importStar(require("../../gen/alpaca_pb"));
class GetStateRequest extends alpaca_pb.GetStateRequest {
    constructor(id) {
        super();
        this.setId(id);
    }
    get id() {
        return this.getId();
    }
}
exports.GetStateRequest = GetStateRequest;
class GetStateResponse extends alpaca_pb.GetStateResponse {
    constructor(id, state) {
        super();
        this.setId(id);
        this.setState(state);
    }
    get id() {
        return this.getId();
    }
    get state() {
        return this.getState();
    }
}
exports.GetStateResponse = GetStateResponse;
class PromptRequest extends alpaca_pb.PromptRequest {
    constructor(id, prompt) {
        super();
        this.setId(id);
        this.setPrompt(prompt);
    }
    get id() {
        return this.getId();
    }
    get prompt() {
        return this.getPrompt();
    }
}
exports.PromptRequest = PromptRequest;
class PromptResponse extends alpaca_pb.PromptResponse {
    constructor(text) {
        super();
        this.setText(text);
    }
    get text() {
        return this.getText();
    }
}
exports.PromptResponse = PromptResponse;
