import { IUser, MaybeObjectId, User } from "../mongo/mongo";
import { authRepository } from "./auth";

class UserRepository {
  async createUser(username: string, password: string): Promise<IUser> {
    const user = new User({
      username: username,
      password_hash: await authRepository.hashPassword(password),
    });
    await user.save();

    return user;
  }

  async findUser(userId: MaybeObjectId): Promise<IUser | null> {
    return User.findById(userId);
  }

  async findUserByUsername(username: string): Promise<IUser | null> {
    return User.findOne({
      username: username,
    });
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.findUserByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    await authRepository.assertPassword(password, user.password_hash);
    return await authRepository.signJwt({
      userId: user._id.toString(),
      username: user.username,
    });
  }
}

export const userRepository = new UserRepository();
