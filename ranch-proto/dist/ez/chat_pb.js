"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMessageResponseEz = exports.AddMessageRequestEz = exports.SetChatTitleResponseEz = exports.SetChatTitleRequestEz = exports.GetChatMessagesResponseEz = exports.GetChatMessagesRequestEz = exports.GetChatsResponseEz = exports.GetChatsRequestEz = exports.CreateChatResponseEz = exports.CreateChatRequestEz = exports.ChatObjectEz = exports.MessageEz = void 0;
const chat_pb_1 = require("../../gen/chat_pb");
class MessageEz extends chat_pb_1.Message {
    constructor(id, chatId, sender, timestamp, text) {
        super();
        this.id = id;
        this.chatId = chatId;
        this.sender = sender;
        this.timestamp = timestamp;
        this.text = text;
    }
}
exports.MessageEz = MessageEz;
Object.defineProperty(chat_pb_1.Message.prototype, 'id', {
    get() { return this.getId(); },
    set(chatId) { this.setId(chatId); },
});
Object.defineProperty(chat_pb_1.Message.prototype, 'chatId', {
    get() { return this.getChatid(); },
    set(chatId) { this.setChatid(chatId); },
});
Object.defineProperty(chat_pb_1.Message.prototype, 'sender', {
    get() { return this.getSender(); },
    set(sender) { this.setSender(sender); },
});
Object.defineProperty(chat_pb_1.Message.prototype, 'timestamp', {
    get() { return this.getTimestamp(); },
    set(timestamp) { this.setTimestamp(timestamp); },
});
Object.defineProperty(chat_pb_1.Message.prototype, 'text', {
    get() { return this.getText(); },
    set(text) { this.setText(text); },
});
class ChatObjectEz extends chat_pb_1.ChatObject {
    constructor(id, userId, timestamp, title) {
        super();
        this.id = id;
        this.userId = userId;
        this.timestamp = timestamp;
        this.title = title;
    }
}
exports.ChatObjectEz = ChatObjectEz;
Object.defineProperty(chat_pb_1.ChatObject.prototype, 'id', {
    get() { return this.getId(); },
    set(id) { this.setId(id); },
});
Object.defineProperty(chat_pb_1.ChatObject.prototype, 'userId', {
    get() { return this.getUserid(); },
    set(userId) { this.setUserid(userId); },
});
Object.defineProperty(chat_pb_1.ChatObject.prototype, 'timestamp', {
    get() { return this.getTimestamp(); },
    set(timestamp) { this.setTimestamp(timestamp); },
});
Object.defineProperty(chat_pb_1.ChatObject.prototype, 'title', {
    get() { return this.getTitle(); },
    set(title) {
        title ? this.setTitle(title) : this.clearTitle();
    },
});
class CreateChatRequestEz extends chat_pb_1.CreateChatRequest {
    constructor(userId) {
        super();
        this.userId = userId;
    }
}
exports.CreateChatRequestEz = CreateChatRequestEz;
Object.defineProperty(chat_pb_1.CreateChatRequest.prototype, 'userId', {
    get() { return this.getUserid(); },
    set(userId) { this.setUserid(userId); },
});
class CreateChatResponseEz extends chat_pb_1.CreateChatResponse {
    constructor(chat) {
        super();
        this.chat = chat;
    }
}
exports.CreateChatResponseEz = CreateChatResponseEz;
Object.defineProperty(chat_pb_1.CreateChatResponse.prototype, 'chat', {
    get() { return this.getChat(); },
    set(chat) { this.setChat(chat); },
});
class GetChatsRequestEz extends chat_pb_1.GetChatsRequest {
    constructor(userId) {
        super();
        this.userId = userId;
    }
}
exports.GetChatsRequestEz = GetChatsRequestEz;
Object.defineProperty(chat_pb_1.GetChatsRequest.prototype, 'userId', {
    get() { return this.getUserid(); },
    set(userId) { this.setUserid(userId); },
});
class GetChatsResponseEz extends chat_pb_1.GetChatsResponse {
    constructor(chats) {
        super();
        this.chats = chats;
    }
}
exports.GetChatsResponseEz = GetChatsResponseEz;
Object.defineProperty(chat_pb_1.GetChatsResponse.prototype, 'chats', {
    get() { return this.getChatsList(); },
    set(chats) { this.setChatsList(chats); },
});
class GetChatMessagesRequestEz extends chat_pb_1.GetChatMessagesRequest {
    constructor(chatId) {
        super();
        this.chatId = chatId;
    }
}
exports.GetChatMessagesRequestEz = GetChatMessagesRequestEz;
Object.defineProperty(chat_pb_1.GetChatMessagesRequest.prototype, 'chatId', {
    get() { return this; },
    set(chatId) { this.setChatid(chatId); },
});
class GetChatMessagesResponseEz extends chat_pb_1.GetChatMessagesResponse {
    constructor(messages) {
        super();
        this.messages = messages;
    }
}
exports.GetChatMessagesResponseEz = GetChatMessagesResponseEz;
Object.defineProperty(chat_pb_1.GetChatMessagesResponse.prototype, 'messages', {
    get() { return this.getMessagesList(); },
    set(messages) { this.setMessagesList(messages); },
});
class SetChatTitleRequestEz extends chat_pb_1.SetChatTitleRequest {
    constructor(chatId, title) {
        super();
        this.chatId = chatId;
        this.title = title;
    }
}
exports.SetChatTitleRequestEz = SetChatTitleRequestEz;
Object.defineProperty(chat_pb_1.SetChatTitleRequest.prototype, 'chatId', {
    get() { return this.getChatid(); },
    set(chatId) { this.setChatid(chatId); },
});
Object.defineProperty(chat_pb_1.SetChatTitleRequest.prototype, 'title', {
    get() { return this.getTitle(); },
    set(title) { this.setTitle(title); },
});
class SetChatTitleResponseEz extends chat_pb_1.SetChatTitleResponse {
}
exports.SetChatTitleResponseEz = SetChatTitleResponseEz;
class AddMessageRequestEz extends chat_pb_1.AddMessageRequest {
    constructor(chatId, text, sender) {
        super();
        this.chatId = chatId;
        this.text = text;
        this.sender = chat_pb_1.MessageSender.USER;
    }
}
exports.AddMessageRequestEz = AddMessageRequestEz;
Object.defineProperty(chat_pb_1.AddMessageRequest.prototype, 'chatId', {
    get() { return this.getChatid(); },
    set(chatId) { this.setChatid(chatId); },
});
Object.defineProperty(chat_pb_1.AddMessageRequest.prototype, 'text', {
    get() { return this.getText(); },
    set(text) { this.setText(text); },
});
Object.defineProperty(chat_pb_1.AddMessageRequest.prototype, 'sender', {
    get() { return this.getSender(); },
    set(sender) { this.setSender(sender); },
});
class AddMessageResponseEz extends chat_pb_1.AddMessageResponse {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.AddMessageResponseEz = AddMessageResponseEz;
Object.defineProperty(chat_pb_1.AddMessageResponse.prototype, 'message', {
    get() { return this.getMessage(); },
    set(message) { this.setMessage(message); },
});
