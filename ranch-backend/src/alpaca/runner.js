"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpacaRunner = void 0;
const child_process_1 = require("child_process");
const events_1 = require("events");
var AlpacaState;
(function (AlpacaState) {
    AlpacaState[AlpacaState["INIT"] = 0] = "INIT";
    AlpacaState[AlpacaState["READY"] = 1] = "READY";
    AlpacaState[AlpacaState["RUNNING"] = 2] = "RUNNING";
})(AlpacaState || (AlpacaState = {}));
class AlpacaRunner extends events_1.EventEmitter {
    constructor() {
        super();
        this.state = AlpacaState.INIT;
        this.cp = (0, child_process_1.spawn)('./chat', [], {
            cwd: '/alpaca.cpp',
            shell: true
        });
        this.emit('state', AlpacaState.INIT);
        this.cp.stdout.on('data', (data) => {
            data = data.toString();
            if (this.state == AlpacaState.INIT || this.state == AlpacaState.RUNNING) {
                if (this.isPromptCursor(data)) {
                    this.state = AlpacaState.READY;
                    this.emit('state', AlpacaState.READY);
                    this.emit('ready');
                }
            }
        });
    }
    isPromptCursor(data) {
        return data.includes("\n> ");
    }
    whenReady() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.onStateChange((state) => {
                    if (state == AlpacaState.READY) {
                        resolve();
                    }
                });
            });
        });
    }
    onStateChange(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const listener = this.on('state', (state) => {
                callback(state);
            });
        });
    }
    prompt(runner, prompt, onData, onEnd) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state != AlpacaState.READY) {
                throw new Error('Alpaca is not ready');
            }
            const preparedPrompt = prompt.replace("\n", "\\") + "\n";
            runner.cp.stdin.write(prompt + '\n');
            let output = "";
            return new Promise((resolve, reject) => {
                runner.cp.stdout.on('data', (data) => {
                    data = data.toString();
                    if (this.isPromptCursor(data)) {
                        if (onEnd)
                            onEnd();
                        resolve(output);
                    }
                    else {
                        if (onData)
                            onData(data);
                        output += data;
                    }
                });
            });
            // log errors   
            // runner.cp.stderr.on('data', (data) => {
            //     // console.log("ERR",data.toString())
            // })
        });
    }
}
exports.AlpacaRunner = AlpacaRunner;
