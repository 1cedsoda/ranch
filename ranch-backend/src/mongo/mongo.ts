// Using ES6 imports
import mongoose, { Schema, model } from 'mongoose';


export async function connect(): Promise<void>{
  console.log('Connecting to MongoDB...')
  return new Promise(async (resolve, reject) => {
    mongoose.connect('mongodb://root:password@mongodb:27017/ranch?authSource=admin').then(
      () => {
        console.log('Connected to MongoDB');
        resolve();
      }
    ).catch((err) => {
      console.log('Error connecting to MongoDB', err);
      process.exit(1);
    });
  });
}
export async function disconnect(): Promise<void> {
  await mongoose.disconnect();
}

export type IMessageSender = "USER" | "BOT"

export interface IMessage extends Document {
  _id: Schema.Types.ObjectId;
  chatId: Schema.Types.ObjectId;
  text: string;
  timestamp: Date;
  sender: IMessageSender;
}

export interface IChat extends Document {
  _id: Schema.Types.ObjectId;
  messages: Schema.Types.ObjectId[];
  userId: string;
  timestamp: Date;
  chatTitle?: string;
}

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  username: string;
  password_hash: string;
  password_salt: string;
}

const messageSchema = new Schema<IMessage>({
  chatId: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  },
  text: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  sender: String,
});

const chatSchema = new Schema<IChat>({
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
  userId: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  title: String,
});

const userSchema = new Schema<IUser>({
  username: String,
  password_hash: String,
  password_salt: String,
});

export const Chat = model<IChat>('Chat', chatSchema);
export const Message = model<IMessage>('Message', messageSchema);
export const User = model<IUser>('User', userSchema);

export type MaybeObjectId = Schema.Types.ObjectId | string;
export function ensureObjectId (id: MaybeObjectId): Schema.Types.ObjectId {
  if (typeof id === 'string') {
      return new Schema.Types.ObjectId(id);
  }
  return id;
}