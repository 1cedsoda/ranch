"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseEz = exports.LoginRequestEz = void 0;
const auth_pb_1 = require("../../gen/auth_pb");
class LoginRequestEz extends auth_pb_1.LoginRequest {
    constructor(username, password) {
        super();
        this.username = username;
        this.password = password;
    }
}
exports.LoginRequestEz = LoginRequestEz;
Object.defineProperty(auth_pb_1.LoginRequest.prototype, 'username', {
    get() { return this.getUsername(); },
    set(username) { this.setUsername(username); },
});
Object.defineProperty(auth_pb_1.LoginRequest.prototype, 'password', {
    get() { return this.getPassword(); },
    set(password) { this.setPassword(password); },
});
class LoginResponseEz extends auth_pb_1.LoginResponse {
    constructor(token) {
        super();
        this.jwt = token;
    }
}
exports.LoginResponseEz = LoginResponseEz;
Object.defineProperty(auth_pb_1.LoginResponse.prototype, 'jwt', {
    get() { return this.getJwt(); },
    set(token) { this.setJwt(token); },
});
