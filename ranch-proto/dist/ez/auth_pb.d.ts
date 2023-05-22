import { LoginRequest, LoginResponse } from "../../gen/auth_pb";
export declare class LoginRequestEz extends LoginRequest {
    username: string;
    password: string;
    constructor(username: string, password: string);
}
export declare class LoginResponseEz extends LoginResponse {
    jwt: string;
    constructor(token: string);
}
