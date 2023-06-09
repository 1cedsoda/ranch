import {
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  handleServerStreamingCall,
  handleUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { IChatServer } from "ranch-proto/dist/grpc";
import {
  AddMessageResponse,
  AddMessageRequest,
  GetChatsResponse,
  GetChatsRequest,
  GetChatsRequestEz,
  AddMessageRequestEz,
  GetChatsResponseEz,
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  SetChatTitleRequest,
  SetChatTitleResponse,
  GetChatMessagesRequestEz,
  SetChatTitleRequestEz,
  ChatObject,
  ChatObjectEz,
  Message,
  MessageEz,
  GetChatMessagesResponseEz,
  SetChatTitleResponseEz,
  AddMessageResponseEz,
  CreateChatRequest,
  CreateChatResponse,
  CreateChatRequestEz,
  CreateChatResponseEz,
  MessageSender,
} from "ranch-proto/dist/pb";
import { UntypedHandleCall } from "@grpc/grpc-js";
import * as mongo from "../mongo/mongo";
import {
  mongoChatToProtoChatObjectEz,
  mongoMessageSenderToProtoMessageSender,
  mongoMessageToProtoMessageEz,
  protoMessageSenderToMongoMessageSender,
} from "../mongo/mappers";
import { chatRepository } from "../repository/chat";
import { authRepository } from "../repository/auth";
import { Status } from "@grpc/grpc-js/build/src/constants";

export class ChatServer implements IChatServer {
  [name: string]: UntypedHandleCall;
  async createChat(
    call: ServerUnaryCall<CreateChatRequest, CreateChatResponse>,
    callback: sendUnaryData<CreateChatResponse>
  ) {
    console.log("createChat", call.request.toObject());

    const req = call.request as CreateChatRequestEz;
    const { userId } = req;

    // protect call
    const allow = await authRepository.protectGrpcUnary(call, callback, userId);
    if (!allow) return;

    const chat = await chatRepository.createChat(userId);

    const chatObject = mongoChatToProtoChatObjectEz(chat);
    const res = new CreateChatResponseEz(chatObject);
    callback(null, res);
  }

  async getChats(
    call: ServerUnaryCall<GetChatsRequest, GetChatsResponse>,
    callback: sendUnaryData<GetChatsResponse>
  ) {
    console.log("getChats", call.request.toObject());
    const req = call.request as GetChatsRequestEz;
    const { userId } = req;

    // protect call
    const allow = await authRepository.protectGrpcUnary(call, callback, userId);
    if (!allow) return;

    const chats = await chatRepository.findChats(userId);

    const chatObjects = chats.map((chat) => mongoChatToProtoChatObjectEz(chat));
    const res = new GetChatsResponseEz(chatObjects);
    callback(null, res);
  }

  async streamChats(
    call: ServerWritableStream<GetChatsRequest, GetChatsResponse>
  ) {
    console.log("streamChats", call.request.toObject());
    const req = call.request as GetChatsRequestEz;
    const { userId } = req;

    // protect call
    const allow = await authRepository.protectGrpcStream(call, userId);
    if (!allow) return;

    let lastChats: mongo.IChat[] = [];

    const runInterval = async () => {
      let chats = await chatRepository.findChats(userId);
      let equals = lastChats.length == chats.length;

      if (!equals) {
        const chatObjects = chats.map((chat) =>
          mongoChatToProtoChatObjectEz(chat)
        );
        const res = new GetChatsResponseEz(chatObjects);
        call.write(res);
      }
    };

    runInterval();
    setInterval(runInterval, 500);
  }

  async getChatMessages(
    call: ServerUnaryCall<GetChatMessagesRequest, GetChatMessagesResponse>,
    callback: sendUnaryData<GetChatMessagesResponse>
  ) {
    console.log("getChatMessages", call.request.toObject());
    const req = call.request as GetChatMessagesRequestEz;
    const { chatId } = req;

    const chat = await chatRepository.findChat(chatId);
    if (!chat) {
      callback({
        code: Status.NOT_FOUND,
        ...new Error("Chat not found")
      });
      return;
    }

    // protect call
    const allow = await authRepository.protectGrpcUnary(call, callback, chat.userId);
    if (!allow) return;

    const messages = await chatRepository.findMessages(chatId);

    const protoMessages = messages.map((message) => {
      return mongoMessageToProtoMessageEz(message);
    });

    const res = new GetChatMessagesResponseEz(protoMessages);
    callback(null, res);
  }

  async setChatTitle(
    call: ServerUnaryCall<SetChatTitleRequest, SetChatTitleResponse>,
    callback: sendUnaryData<SetChatTitleResponse>
  ) {
    console.log("setChatTitle", call.request.toObject());
    const req = call.request as SetChatTitleRequestEz;
    const { chatId, title } = req;

    const chat = await chatRepository.findChat(chatId);
    if (!chat) {
      callback({
        code: Status.NOT_FOUND,
        ...new Error("Chat not found")
      });
      return;
    }

    // protect call
    const allow = await authRepository.protectGrpcUnary(call, callback, chat.userId);
    if (!allow) return;

    await chatRepository.updateChatTitle(chatId, title);

    callback(null, new SetChatTitleResponseEz());
  }

  async addMessage(
    call: ServerUnaryCall<AddMessageRequest, AddMessageResponse>,
    callback: sendUnaryData<AddMessageResponse>
  ) {
    console.log("addMessage", call.request.toObject());
    const req = call.request as AddMessageRequestEz;
    const { chatId, text, sender } = req;

    const chat = await chatRepository.findChat(chatId);
    if (!chat) {
      callback({
        code: Status.NOT_FOUND,
        ...new Error("Chat not found")
      });
      return;
    }

    // protect call
    const allow = await authRepository.protectGrpcUnary(call, callback, chat.userId);
    if (!allow) return;

    let newMessage = await chatRepository.addMessage(
      chatId,
      text,
      protoMessageSenderToMongoMessageSender(sender)
    );

    const message = mongoMessageToProtoMessageEz(newMessage);
    callback(null, new AddMessageResponseEz(message));
  }
}
