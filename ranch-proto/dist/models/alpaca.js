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
const proto = __importStar(require("../../gen/alpaca_pb"));
// message GetStateRequest {
//   string id = 1;
// }
class GetStateRequest {
    constructor(id) {
        this.id = id;
    }
    static fromProto(proto) {
        return new GetStateRequest(proto.getId());
    }
    get proto() {
        return new proto.GetStateRequest()
            .setId(this.id);
    }
}
exports.GetStateRequest = GetStateRequest;
// message GetStateResponse {
//   string id = 1;
//   AlpacaState state = 2;
// }
class GetStateResponse {
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
    static fromProto(proto) {
        return new GetStateResponse(proto.getId(), proto.getState());
    }
    get proto() {
        return new proto.GetStateResponse()
            .setId(this.id)
            .setState(this.state);
    }
}
exports.GetStateResponse = GetStateResponse;
// message PromptRequest {
//   string id = 1;
//   string prompt = 2;
// }
class PromptRequest {
    constructor(id, prompt) {
        this.id = id;
        this.prompt = prompt;
    }
    static fromProto(proto) {
        return new PromptRequest(proto.getId(), proto.getPrompt());
    }
    get proto() {
        return new proto.PromptRequest()
            .setId(this.id)
            .setPrompt(this.prompt);
    }
}
exports.PromptRequest = PromptRequest;
// message PromptResponse {
//   string text = 1;
// }
class PromptResponse {
    constructor(text) {
        this.text = text;
    }
    static fromProto(proto) {
        return new PromptResponse(proto.getText());
    }
    get proto() {
        return new proto.PromptResponse()
            .setText(this.text);
    }
}
exports.PromptResponse = PromptResponse;
