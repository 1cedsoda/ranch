import { ObjectId, Schema } from 'mongoose';
import { Chat, IChat, IMessage, IMessageSender, MaybeObjectId,  Message, ensureObjectId } from '../mongo/mongo';


class ChatRepository {
    async createChat (userId: string): Promise<IChat> {
        const chat = new Chat({
          messages: [],
          userId: userId,
          timestamp: new Date(),
          title: '',
        });
        await chat.save();

        return chat;
    }
    async findChat (chatId: MaybeObjectId): Promise<IChat | null> {
        return Chat.findById(chatId);
    }
    async findChats (userId: string): Promise<IChat[]> {
        return Chat.find({
          userId: userId,
        })
      }
    async updateChat(chat: IChat): Promise<void> {
        await Chat.findByIdAndUpdate(
            chat._id,
          {
            messages: chat.messages,
            userId: chat.userId,
            timestamp: chat.timestamp,
            title: chat.title,
          });
    }
    async updateChatTitle (chatId: MaybeObjectId, title: string): Promise<void> {
        await Chat.findByIdAndUpdate(
            chatId,
            {
                title: title,
            });
    }
    async deleteChat (chatId: MaybeObjectId): Promise<void> {
        await Chat.findByIdAndDelete(chatId);
    }
    async findMessages (chatId: MaybeObjectId): Promise<IMessage[]> {
        return await Message.find({
          chatId: ensureObjectId(chatId),
        });
    }
    async addMessage (chatId: MaybeObjectId, text: string, sender: IMessageSender): Promise<IMessage> {
        const chat = await this.findChat(chatId);
        if (!chat) {
            throw new Error('Chat not found');
        }
        const newMessage = await Message.create({
            chatId: chatId,
            text: text,
            sender: sender,
            timestamp: new Date(),
        });

        chat.messages.push(newMessage.id);
        await this.updateChat(chat);

        return newMessage;
    }
}

export const chatRepository = new ChatRepository();