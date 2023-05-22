import { ObjectId, Schema } from 'mongoose';
import { Chat, IChat, IMessage, IMessageSender, IUser, MaybeObjectId,  Message, User, ensureObjectId } from '../mongo/mongo';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import jwt, { Secret, JwtPayload, Jwt } from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const SECRET_KEY: Secret = 'your-secret-key-here';

interface MyJwtPayload extends JwtPayload {
    userId: string;
    username: string;
}

class UserRepository {
    async createUser (username: string, password: string): Promise<IUser> {
        const user = new User({
          username: username,
          password_hash: await bcrypt.hash(password, 10),
        });
        await user.save();

        return user;
    }

    async findUser (userId: MaybeObjectId): Promise<IUser | null> {
        return User.findById(userId);
    }

    async findUserByUsername (username: string): Promise<IUser | null> {
        return User.findOne({
            username: username,
        });
    }

    async login (username: string, password: string): Promise<string> {
        const user = await this.findUserByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }
        const password_match = await bcrypt.compare(password, user.password_hash);
        if (!password_match) {
            throw new Error('Password does not match');
        }
        const token_payload: MyJwtPayload = {
            userId: user._id.toString(),
            username: user.username,
        };
        return jwt.sign(token_payload, SECRET_KEY);
    }

    async verify(token: string): Promise<MyJwtPayload> {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded as MyJwtPayload;
    }

    
}

export const userRepository = new UserRepository();