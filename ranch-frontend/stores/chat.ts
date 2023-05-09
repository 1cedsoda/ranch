import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { AddMessageRequestEz, AlpacaState, ChatObject, ChatObjectEz, GetChatMessagesRequestEz, GetChatsRequestEz, GetChatsResponseEz, GetStateRequest, GetStateRequestEz, GetStateResponse, GetStateResponseEz, Message, MessageEz, PromptRequest, PromptRequestEz, PromptResponse, PromptResponseEz, SetChatTitleRequestEz } from 'ranch-proto/dist/pb'
import { RootState, ThunkExtra } from './rootStore'
import { ClientReadableStream } from 'grpc-web'
import { init } from 'next/dist/compiled/@vercel/og/satori'


// === STORE ===


export interface ChatStoreState {
    chats: ChatObjectEz[],
    messages: MessageEz[]
}

export const initialChatState: ChatStoreState = {
    chats: [],
    messages: []
}

// === REDUCER ===
type SetChatPayload = ChatObjectEz
type SetChatsPayload = ChatObjectEz[]
type SetMessagePaylaod = MessageEz
type SetMessagesPaylaod = MessageEz[]
type SetChatTitlePayload = {
    chatId: string,
    title: string
}
type InitializeForUserPayload = {
    userId: string | undefined
}

export const chatSlice = createSlice({
    name: 'alpaca',
    initialState: initialChatState,
    reducers: {
        setChat: (state: ChatStoreState, actions: { payload: SetChatPayload }) => {
          return {
              ...state,
              chats: [...state.chats, actions.payload]
          }
        },
        setChats: (state: ChatStoreState, actions: { payload: SetChatsPayload }) => {
          return {
            ...state,
            chats: [...state.chats, ...actions.payload]
          }
        },
        setMessage: (state: ChatStoreState, actions: { payload: SetMessagePaylaod }) => {
          const newMessages: MessageEz[] = [actions.payload];
          const newMessagesIds = newMessages.map(message => message.id);
          
          return {
            ...state,
            messages: [
              ...state.messages.filter(message => !newMessagesIds.includes(message.id)),
              ...newMessages
            ]
          }
        },
        setMessages: (state: ChatStoreState, actions: { payload: SetMessagesPaylaod }) => {
          const newMessages: MessageEz[] = actions.payload;
          const newMessagesIds = newMessages.map(message => message.id);
          
          return {
            ...state,
            messages: [
              ...state.messages.filter(message => !newMessagesIds.includes(message.id)),
              ...newMessages
            ]
          }
        },
        setChatTitleReducer: (state: ChatStoreState, actions: { payload: SetChatTitlePayload }) => {
          const { chatId, title } = actions.payload;
          const chat = state.chats.find(chat => chat.id === chatId);
          if (chat) {
            chat.title = title;
            return {
              ...state,
              chats: [
                ...state.chats.filter(chat => chat.id !== chatId),
                chat
              ]
            }
          } else {
            return state;
          }
        },
        initializeForUser: (state: ChatStoreState, actions: { payload: InitializeForUserPayload }) => {
          return {
            ...state,
            chats: [],
            messages: []
          }
        }
    }
})

export const { setChat, setChats, setMessage, setMessages, setChatTitleReducer, initializeForUser } = chatSlice.actions

// === ACTIONS ===
export const getChats = createAsyncThunk<void, GetChatsRequestEz, ThunkExtra>(
  "chat/getChats",
  async (request: GetChatsRequestEz, { dispatch, rejectWithValue, extra: { chatClient } }) => {
    const protoResponse = await chatClient.getChats(request);
    const chats = protoResponse.getChatsList() as ChatObjectEz[];
    dispatch(setChats(chats));
  }
);

export const streamChats = createAsyncThunk<void, GetChatsRequestEz, ThunkExtra>(
  "chat/streamChats",
  async (request: GetChatsRequestEz, { dispatch, rejectWithValue, extra: { chatClient } }) => {
    const stream = chatClient.streamChats(request) as ClientReadableStream<GetChatsResponseEz>;
    
    stream.on("data", (res: GetChatsResponseEz) => {
      const chats = res.chats as ChatObjectEz[];
      dispatch(setChats(chats));
    });

    stream.on("error", (error: Error) => {
      rejectWithValue(error);
    });
  }
);

export const getChatMessages = createAsyncThunk<void, GetChatMessagesRequestEz, ThunkExtra>(
  "chat/getChatMessages",
  async (request: GetChatMessagesRequestEz, { dispatch, rejectWithValue, extra: { chatClient } }) => {
    const protoResponse = await chatClient.getChatMessages(request);
    const messages = protoResponse.getMessagesList() as MessageEz[];
    dispatch(setMessages(messages));
  }
);

export const setChatTitle = createAsyncThunk<void, SetChatTitleRequestEz, ThunkExtra>(
  "chat/setChatTitle",
  async (request: SetChatTitleRequestEz, { dispatch, rejectWithValue, extra: { chatClient } }) => {
    chatClient.setChatTitle(request);
    dispatch(setChatTitleReducer({
      chatId: request.chatId,
      title: request.title ?? ''
    }));
  }
);

export const addMessage = createAsyncThunk<void, AddMessageRequestEz, ThunkExtra>(
  "chat/addMessage",
  async (request: AddMessageRequestEz, { dispatch, rejectWithValue, extra: { chatClient } }) => {
    chatClient.addMessage(request);
    const message = request.message as MessageEz;
    dispatch(setMessage(message));
  }
);

// === SELECTORS ===
export const selectChatStore = (state: RootState): ChatStoreState => state.chat

// === EXPORT ===
export default chatSlice.reducer
