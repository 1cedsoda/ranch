import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  ServerUnaryCall,
  ServerWritableStream,
  sendUnaryData,
} from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { endWithStatus } from "../utils/call";

const SALT_ROUNDS = 10;
const SECRET_KEY: Secret = "your-secret-key-here";

export interface MyJwtPayload extends JwtPayload {
  userId: string;
  username: string;
}

class AuthRepository {
  async signJwt(payload: MyJwtPayload): Promise<string> {
    return jwt.sign(payload, SECRET_KEY);
  }

  readToken(call: ServerWritableStream<any, any> | ServerUnaryCall<any, any>): string | undefined {
    return call.metadata.get("token")[0]?.toString();
  }

  async protectGrpcUnary(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
    userId: string | undefined = undefined
  ): Promise<MyJwtPayload | false> {
    const token = this.readToken(call);
    if (!token) {
      console.log("No token")
      callback({
        code: Status.UNAUTHENTICATED,
        ...new Error("No token")
      });
      return false;
    }

    const payload = await this.verifyJwt(token);
    if (payload === undefined) {
      console.log("Invalid token")
      callback({
        code: Status.UNAUTHENTICATED,
        ...new Error("Invalid token")
      });
      return false;
    }

    if (userId !== undefined && payload.userId !== userId) {
      console.log("No permission")
      callback({
        code: Status.PERMISSION_DENIED,
        ...new Error("No permission")
      });
      return false;
    }
    return payload;
  }

  async protectGrpcStream(
    call: ServerWritableStream<any, any>,
    userId: string | undefined = undefined
  ): Promise<MyJwtPayload | false> {
    const token = this.readToken(call);
    if (!token) {
      console.log("No token")
      endWithStatus(call, Status.UNAUTHENTICATED, new Error("No token"))
      return false;
    }

    const payload = await this.verifyJwt(token);
    if (payload === undefined) {
      console.log("Invalid token")
      endWithStatus(call, Status.UNAUTHENTICATED, new Error("Invalid token"))
      return false;
    }

    if (userId !== undefined && payload.userId !== userId) {
      console.log("No permission")
      endWithStatus(call, Status.PERMISSION_DENIED, new Error("No permission"))
      return false;
    }
    return payload;
  }

  async verifyJwt(token: string): Promise<MyJwtPayload | undefined> {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!decoded) {
      return undefined;
    }
    const payload = decoded as MyJwtPayload;
    return payload;
  }

  async assertPassword(password: string, hash: string) {
    const password_match = await bcrypt.compare(password, hash);
    if (!password_match) {
      throw new Error("Password does not match");
    }
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  }
}

export const authRepository = new AuthRepository();
