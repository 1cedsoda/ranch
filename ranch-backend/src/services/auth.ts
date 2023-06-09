import {
  ServerUnaryCall,
  UntypedHandleCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { LoginRequest, LoginResponse } from "ranch-proto/gen/auth_pb";
import { LoginRequestEz, LoginResponseEz } from "ranch-proto/dist/pb";
import { userRepository } from "../repository/users";
import { IAuthServer } from "ranch-proto/dist/grpc";
import { Status } from "@grpc/grpc-js/build/src/constants";

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

    console.log(user)

    userRepository
      .login(username, password)
      .then((token) => {
        const res = new LoginResponseEz(token);
        console.log(res)
        callback(null, res);
      })
      .catch((err) => {
        console.log(err)
        callback({
          code: Status.UNKNOWN,
          ...new Error(err)
        });
      });
  }
}
