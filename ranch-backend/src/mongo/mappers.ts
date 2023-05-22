import * as mongo from './mongo'

import { ChatObject, ChatObjectEz, MessageEz, MessageSender } from 'ranch-proto/dist/pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Schema } from 'mongoose'

export const mongoChatToProtoChatObjectEz = (a: mongo.IChat): ChatObjectEz => {
    return new ChatObjectEz(a._id.toString(), a.userId, Timestamp.fromDate(a.timestamp), a.title)
}

export const mongoMessageSenderToProtoMessageSender = (a: mongo.IMessageSender): MessageSender => {
    switch (a) {
        case "USER": return MessageSender.USER
        case "BOT": return MessageSender.BOT
    }        
}

export const protoMessageSenderToMongoMessageSender = (a: MessageSender): mongo.IMessageSender => {
    switch (a) {
        case MessageSender.USER: return "USER"
        case MessageSender.BOT: return "BOT"
    }
}

export const mongoMessageToProtoMessageEz = (a: mongo.IMessage): MessageEz => {
    let sender = mongoMessageSenderToProtoMessageSender(a.sender)
    return new MessageEz(a._id.toString(), a.chatId.toString(), sender, Timestamp.fromDate(a.timestamp), a.text)
}

export const protoMessageEzToMongoMessage = (a: MessageEz): mongo.IMessage => {
    let sender = protoMessageSenderToMongoMessageSender(a.sender)
    return {
        _id: new Schema.Types.ObjectId(a.id),
        chatId: new Schema.Types.ObjectId(a.chatId),
        text: a.text,
        timestamp: a.timestamp.toDate(),
        sender: sender
    } as mongo.IMessage
}
