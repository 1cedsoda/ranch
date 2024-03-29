import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { AddMessageResponse, AddMessageRequest, ChatObject, GetChatsResponse, GetChatsRequest, Message, MessageSender, GetChatMessagesRequest, GetChatMessagesResponse, SetChatTitleRequest, SetChatTitleResponse, CreateChatRequest, CreateChatResponse } from "../../gen/chat_pb";

export class MessageEz extends Message {
    id: string
    chatId: string
    sender: MessageSender
    timestamp: Timestamp
    text: string
    constructor(id: string, chatId: string, sender: MessageSender, timestamp: Timestamp, text: string) {
        super()
        this.id = id
        this.chatId = chatId
        this.sender = sender
        this.timestamp = timestamp
        this.text = text
    }
}
Object.defineProperty(Message.prototype, 'id', {
    get (this: Message) { return this.getId() },
    set (this: Message, chatId: string) { this.setId(chatId) },
})
Object.defineProperty(Message.prototype, 'chatId', {
    get (this: Message) { return this.getChatid() },
    set (this: Message, chatId: string) { this.setChatid(chatId) },
})
Object.defineProperty(Message.prototype, 'sender', {
    get (this: Message) { return this.getSender() },
    set (this: Message, sender: MessageSender) { this.setSender(sender) },
})
Object.defineProperty(Message.prototype, 'timestamp', {
    get (this: Message) { return this.getTimestamp() },
    set (this: Message, timestamp: Timestamp) { this.setTimestamp(timestamp) },
})
Object.defineProperty(Message.prototype, 'text', {
    get (this: Message) { return this.getText() },
    set (this: Message, text: string) { this.setText(text) },
})

export class ChatObjectEz extends ChatObject {
    id: string
    userId: string
    timestamp: Timestamp
    title: string | null
    constructor(id: string, userId: string, timestamp: Timestamp, title: string | null) {
        super()
        this.id = id
        this.userId = userId
        this.timestamp = timestamp
        this.title = title
    }
}
Object.defineProperty(ChatObject.prototype, 'id', {
    get (this: ChatObject) { return this.getId() },
    set (this: ChatObject, id: string) { this.setId(id) },
})
Object.defineProperty(ChatObject.prototype, 'userId', {
    get (this: ChatObject) { return this.getUserid() },
    set (this: ChatObject, userId: string) { this.setUserid(userId) },
})
Object.defineProperty(ChatObject.prototype, 'timestamp', {
    get (this: ChatObject) { return this.getTimestamp() },
    set (this: ChatObject, timestamp: Timestamp) { this.setTimestamp(timestamp) },
})
Object.defineProperty(ChatObject.prototype, 'title', {
    get (this: ChatObject) { return this.getTitle() },
    set (this: ChatObject, title: string | null) { 
        title ? this.setTitle(title) : this.clearTitle()
    },
})

export class CreateChatRequestEz extends CreateChatRequest {
    userId: string
    constructor(userId: string) {
        super()
        this.userId = userId
    }
}
Object.defineProperty(CreateChatRequest.prototype, 'userId', {
    get (this: CreateChatRequest) { return this.getUserid() },
    set (this: CreateChatRequest, userId: string) { this.setUserid(userId) },
})

export class CreateChatResponseEz extends CreateChatResponse {
    chat: ChatObject
    constructor(chat: ChatObject) {
        super()
        this.chat = chat
    }
}
Object.defineProperty(CreateChatResponse.prototype, 'chat', {
    get (this: CreateChatResponse) { return this.getChat() },
    set (this: CreateChatResponse, chat: ChatObject) { this.setChat(chat) },
})

export class GetChatsRequestEz extends GetChatsRequest {
    userId: string
    constructor(userId: string) {
        super()
        this.userId = userId
    }
}
Object.defineProperty(GetChatsRequest.prototype, 'userId', {
    get (this: GetChatsRequest) { return this.getUserid() },
    set (this: GetChatsRequest, userId: string) { this.setUserid(userId) },
})

export class GetChatsResponseEz extends GetChatsResponse {
    chats: ChatObject[]
    constructor(chats: ChatObject[]) {
        super()
        this.chats = chats
    }
}
Object.defineProperty(GetChatsResponse.prototype, 'chats', {
    get (this: GetChatsResponse) { return this.getChatsList() },
    set (this: GetChatsResponse, chats: ChatObject[]) { this.setChatsList(chats) },
})

export class GetChatMessagesRequestEz extends GetChatMessagesRequest {
    chatId: string
    constructor(chatId: string) {
        super()
        this.chatId = chatId
    }
}
Object.defineProperty(GetChatMessagesRequest.prototype, 'chatId', {
    get (this: GetChatMessagesRequest) { return this },
    set (this: GetChatMessagesRequest, chatId: string) { this.setChatid(chatId) },
})

export class GetChatMessagesResponseEz extends GetChatMessagesResponse {
    messages: Message[]
    constructor(messages: Message[]) {
        super()
        this.messages = messages
    }
}
Object.defineProperty(GetChatMessagesResponse.prototype, 'messages', {
    get (this: GetChatMessagesResponse) { return this.getMessagesList() },
    set (this: GetChatMessagesResponse, messages: Message[]) { this.setMessagesList(messages) },
})

export class SetChatTitleRequestEz extends SetChatTitleRequest {
    chatId: string
    title: string
    constructor(chatId: string, title: string) {
        super()
        this.chatId = chatId
        this.title = title
    }
}
Object.defineProperty(SetChatTitleRequest.prototype, 'chatId', {
    get (this: SetChatTitleRequest) { return this.getChatid() },
    set (this: SetChatTitleRequest, chatId: string) { this.setChatid(chatId) },
})
Object.defineProperty(SetChatTitleRequest.prototype, 'title', {
    get (this: SetChatTitleRequest) { return this.getTitle() },
    set (this: SetChatTitleRequest, title: string) { this.setTitle(title) },
})

export class SetChatTitleResponseEz extends SetChatTitleResponse {
}

export class AddMessageRequestEz extends AddMessageRequest {
    chatId: string
    text: string
    sender: MessageSender
    constructor(chatId: string, text: string, sender: MessageSender) {
        super()
        this.chatId = chatId
        this.text = text
        this.sender = MessageSender.USER
    }
}
Object.defineProperty(AddMessageRequest.prototype, 'chatId', {
    get (this: AddMessageRequest) { return this.getChatid() },
    set (this: AddMessageRequest, chatId: string) { this.setChatid(chatId) },
})
Object.defineProperty(AddMessageRequest.prototype, 'text', {
    get (this: AddMessageRequest) { return this.getText() },
    set (this: AddMessageRequest, text: string) { this.setText(text) },
})
Object.defineProperty(AddMessageRequest.prototype, 'sender', {
    get (this: AddMessageRequest) { return this.getSender() },
    set (this: AddMessageRequest, sender: MessageSender) { this.setSender(sender) },
})

export class AddMessageResponseEz extends AddMessageResponse {
    message: Message
    constructor(message: Message) {
        super()
        this.message = message
    }
}
Object.defineProperty(AddMessageResponse.prototype, 'message', {
    get (this: AddMessageResponse) { return this.getMessage() },
    set (this: AddMessageResponse, message: Message) { this.setMessage(message) },
})