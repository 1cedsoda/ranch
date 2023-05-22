import { LoginRequest, LoginResponse } from "../../gen/auth_pb";

export class LoginRequestEz extends LoginRequest {
    username: string
    password: string
    constructor(username: string, password: string) {
        super()
        this.username = username
        this.password = password
    }
}
Object.defineProperty(LoginRequest.prototype, 'username', {
    get (this: LoginRequest) { return this.getUsername() },
    set (this: LoginRequest, username: string) { this.setUsername(username) },
})
Object.defineProperty(LoginRequest.prototype, 'password', {
    get (this: LoginRequest) { return this.getPassword() },
    set (this: LoginRequest, password: string) { this.setPassword(password) },
})

export class LoginResponseEz extends LoginResponse {
    jwt: string
    constructor(token: string) {
        super()
        this.jwt = token
    }
}
Object.defineProperty(LoginResponse.prototype, 'jwt', {
    get (this: LoginResponse) { return this.getJwt() },
    set (this: LoginResponse, token: string) { this.setJwt(token) },
})