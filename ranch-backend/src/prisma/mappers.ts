import * as prisma_client from '@prisma/client';
import { prisma } from '../prisma/prisma';
import { ChatObject, ChatObjectEz, MessageEz, MessageSender } from 'ranch-proto/dist/pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

const primsaChatToProtoChatObjectEz = (a: prisma_client.Chat): ChatObjectEz => {
    return new ChatObjectEz(a.id, a.userId, Timestamp.fromDate(a.timestamp), a.title)
}

const prismaMessageSenderToProtoMessageSender = (a: prisma_client.MessageSender): MessageSender => {
    switch (a) {
        case prisma_client.MessageSender.USER: return MessageSender.USER
        case prisma_client.MessageSender.BOT: return MessageSender.BOT
    }        
}

const protoMessageSenderToPrismaMessageSender = (a: MessageSender): prisma_client.MessageSender => {
    switch (a) {
        case MessageSender.USER: return prisma_client.MessageSender.USER
        case MessageSender.BOT: return prisma_client.MessageSender.BOT
    }
}

const prismaMessageToProtoMessageEz = (a: prisma_client.Message): MessageEz => {
    let sender = prismaMessageSenderToProtoMessageSender(a.sender)
    return new MessageEz(a.id, a.chatId, sender, Timestamp.fromDate(a.timestamp), a.text)
}

const protoMessageEzToPrismaMessage = (a: MessageEz): prisma_client.Message => {
    let sender = protoMessageSenderToPrismaMessageSender(a.sender)
    return {
        id: a.id,
        chatId: a.chatId,
        text: a.text,
        timestamp: a.timestamp.toDate(),
        sender: sender
    } as prisma_client.Message
}

export const convert = <FROM, TO>(from: FROM): TO => {
    if (gerericsEqual<FROM, prisma_client.Chat>() && gerericsEqual<TO, ChatObject>()) {
        return primsaChatToProtoChatObjectEz(from as unknown as prisma_client.Chat) as unknown as TO
    }
    if (gerericsEqual<FROM, prisma_client.Message>() && gerericsEqual<TO, MessageEz>()) {
        return prismaMessageToProtoMessageEz(from as unknown as prisma_client.Message) as unknown as TO
    }
    if (gerericsEqual<FROM, MessageEz>() && gerericsEqual<TO, prisma_client.Message>()) {
        return protoMessageEzToPrismaMessage(from as unknown as MessageEz) as unknown as TO
    }
    throw new Error('converter not found')
}

export const convertList =<FROM, TO>(from: FROM[]): TO[] => {
    return from.map((a: FROM) => convert<FROM, TO>(a))
}

const gerericsEqual = <A, B>(): boolean  => {
    let a = Object() as A;
    let b = Object() as B;
    return typeof a == typeof b;
}


