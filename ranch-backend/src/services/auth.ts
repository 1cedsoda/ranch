import {
  ServerUnaryCall,
  UntypedHandleCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { LoginRequest, LoginResponse } from "ranch-proto/gen/auth_pb";
import { LoginRequestEz, LoginResponseEz } from "ranch-proto/dist/pb";
import { userRepository } from "../repository/users";
import { IAuthServer } from "ranch-proto/dist/grpc";

export class AuthServer implements IAuthServer {
  [name: string]: UntypedHandleCall;
  async login(
    call: ServerUnaryCall<LoginRequest, LoginResponse>,
    callback: sendUnaryData<LoginResponse>
  ) {
    console.log("login", call.request.toObject());
    const req = call.request as LoginRequestEz;
    const { username, password } = req;

    let user = await userRepository.findUserByUsername(username);
    if (!user) {
      user = await userRepository.createUser(username, password);
    }

    userRepository
      .login(username, password)
      .then((token) => {
        const res = new LoginResponseEz(token);
        callback(null, res);
      })
      .catch((err) => {
        callback(new Error(err));
      });
  }
}
