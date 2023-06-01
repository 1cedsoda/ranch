import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  ServerUnaryCall,
  ServerWritableStream,
  sendUnaryData,
} from "@grpc/grpc-js";

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

  async protectGrpcUnary(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
    userId: string | undefined = undefined
  ): Promise<MyJwtPayload | undefined> {
    const payload = await this.verifyJwt(
      call.metadata.get("token")[0].toString()
    );
    if (payload === undefined) {
      callback(new Error("Invalid token"));
      return undefined;
    }
    if (userId !== undefined && payload.userId !== userId) {
      callback(new Error("No permission"));
      return undefined;
    }
    return payload;
  }

  async protectGrpcStream(
    call: ServerWritableStream<any, any>,
    userId: string | undefined = undefined
  ): Promise<MyJwtPayload | undefined> {
    const payload = await this.verifyJwt(
      call.metadata.get("token")[0].toString()
    );
    if (payload === undefined) {
      call.end();
      return undefined;
    }
    if (userId !== undefined && payload.userId !== userId) {
      call.end();
      return undefined;
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
