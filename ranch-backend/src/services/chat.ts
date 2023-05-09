import { ServerReadableStream, ServerUnaryCall, ServerWritableStream, handleServerStreamingCall, handleUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { IChatServer } from 'ranch-proto/dist/grpc';
import { AddMessageResponse, AddMessageRequest, GetChatsResponse, GetChatsRequest, GetChatsRequestEz, AddMessageRequestEz, GetChatsResponseEz, GetChatMessagesRequest, GetChatMessagesResponse, SetChatTitleRequest, SetChatTitleResponse, GetChatMessagesRequestEz, SetChatTitleRequestEz, ChatObject, ChatObjectEz, Message, MessageEz, GetChatMessagesResponseEz, SetChatTitleResponseEz, AddMessageResponseEz } from 'ranch-proto/dist/pb';
import { UntypedHandleCall } from '@grpc/grpc-js';
import { prisma } from '../prisma/prisma';
import { convert, convertList } from '../prisma/mappers';
import * as prisma_client from '@prisma/client';

function findChats (userId: string): Promise<prisma_client.Chat[]> {
  return prisma.chat.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
  });
}

export class ChatServer implements IChatServer {
  [name: string]: UntypedHandleCall;
  async getChats (call: ServerUnaryCall<GetChatsRequest, GetChatsResponse>, callback: sendUnaryData<GetChatsResponse>) {
    const req = call.request as GetChatsRequestEz;
    const { userId } = req;

    const chats = await findChats(userId);
    const chatObjects = convertList<prisma_client.Chat, ChatObjectEz>(chats);
    const res = new GetChatsResponseEz(chatObjects);
  };

  // streamChats: handleServerStreamingCall<GetChatsRequest, GetChatsResponse>;
  streamChats (call: ServerWritableStream<GetChatsRequest, GetChatsResponse>) {
    const req = call.request as GetChatsRequestEz;
    const { userId } = req;

    let lastChats: prisma_client.Chat[] = [];

    const runIntercal = async () => {
      let chats = await findChats(userId);
      let equals = lastChats.length == chats.length;
  
      if (!equals) {
        const chatObjects = convertList<prisma_client.Chat, ChatObjectEz>(chats);
        const res = new GetChatsResponseEz(chatObjects);
        call.write(res);
      }
    }

    runIntercal();
    setInterval(runIntercal, 500);
  };

  async getChatMessages (call: ServerUnaryCall<GetChatMessagesRequest, GetChatMessagesResponse>, callback: sendUnaryData<GetChatMessagesResponse>) {
    const req = call.request as GetChatMessagesRequestEz;
    const { chatId } = req;

    const messages = await prisma.message.findMany({
      where: {
        chatId: chatId
      },
    });

    const protoMessages = convertList<prisma_client.Message, MessageEz>(messages);
    const res = new GetChatMessagesResponseEz(protoMessages);
    callback(null, res);
  };

  setChatTitle (call: ServerUnaryCall<SetChatTitleRequest, SetChatTitleResponse>, callback: sendUnaryData<SetChatTitleResponse>) {
    const req = call.request as SetChatTitleRequestEz;
    const { chatId, title } = req;

    prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        title,
      },
    });

    callback(null, new SetChatTitleResponseEz());
  };

  async addMessage (call: ServerUnaryCall<AddMessageRequest, AddMessageResponse>, callback: sendUnaryData<AddMessageResponse>) {
    const req = call.request as AddMessageRequestEz;
    const { chatId } = req;
    const message = req.message as MessageEz;
    
    const prismaMessage = convert<MessageEz, prisma_client.Message>(message);

    await prisma.message.create({
      data: {
        ...prismaMessage,
      }
    });

    callback(null, new AddMessageResponseEz());
  };
}
