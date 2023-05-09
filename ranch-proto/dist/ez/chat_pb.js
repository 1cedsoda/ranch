"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMessageResponseEz = exports.AddMessageRequestEz = exports.SetChatTitleResponseEz = exports.SetChatTitleRequestEz = exports.GetChatMessagesResponseEz = exports.GetChatMessagesRequestEz = exports.GetChatsResponseEz = exports.GetChatsRequestEz = exports.ChatObjectEz = exports.MessageEz = void 0;
const chat_pb_1 = require("../../gen/chat_pb");
class MessageEz extends chat_pb_1.Message {
    constructor(sender, timestamp, text) {
        super();
        this.sender = sender;
        this.timestamp = timestamp;
        this.text = text;
    }
}
exports.MessageEz = MessageEz;
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
    set(title) {
        title ? this.setTitle(title) : this.clearTitle();
    },
});
class SetChatTitleResponseEz extends chat_pb_1.SetChatTitleResponse {
}
exports.SetChatTitleResponseEz = SetChatTitleResponseEz;
class AddMessageRequestEz extends chat_pb_1.AddMessageRequest {
    constructor(chatId, message) {
        super();
        this.chatId = chatId;
        this.message = message;
    }
}
exports.AddMessageRequestEz = AddMessageRequestEz;
Object.defineProperty(chat_pb_1.AddMessageRequest.prototype, 'chatId', {
    get() { return this.getChatid(); },
    set(chatId) { this.setChatid(chatId); },
});
Object.defineProperty(chat_pb_1.AddMessageRequest.prototype, 'message', {
    get() { return this.getMessage(); },
    set(message) { this.setMessage(message); },
});
class AddMessageResponseEz extends chat_pb_1.AddMessageResponse {
}
exports.AddMessageResponseEz = AddMessageResponseEz;
