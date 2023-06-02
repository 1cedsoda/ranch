import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddMessageRequestEz,
  ChatObjectEz,
  CreateChatRequestEz,
  GetChatMessagesRequestEz,
  GetChatsRequestEz,
  GetChatsResponseEz,
  MessageEz,
  MessageSender,
  SetChatTitleRequestEz,
} from "ranch-proto/dist/pb";
import { RootState, ThunkExtra } from "./rootStore";
import { ClientReadableStream } from "grpc-web";
import { selectGrpcAuthMetadata } from "./auth";
import { getState } from "./alpaca";

// === STORE ===
export interface ChatStoreState {
  chats: ChatObjectEz[];
  messages: MessageEz[];
}

export const initialChatState: ChatStoreState = {
  chats: [],
  messages: [],
};

// === REDUCER ===
type SetChatPayload = ChatObjectEz;
type SetChatsPayload = ChatObjectEz[];
type SetMessagePaylaod = MessageEz;
type SetMessagesPaylaod = MessageEz[];
type SetChatTitlePayload = {
  chatId: string;
  title: string;
};
type InitializeForUserPayload = {
  userId: string | undefined;
};

export const chatSlice = createSlice({
  name: "alpaca",
  initialState: initialChatState,
  reducers: {
    setChat: (state: ChatStoreState, actions: { payload: SetChatPayload }) => {
      console.log("setChat", actions.payload);

      // merge based on chatId
      return {
        ...state,
        chats: [
          ...state.chats.filter(
            (chat) => chat.getId() != actions.payload.getId()
          ),
          actions.payload,
        ],
      };
    },
    setChats: (
      state: ChatStoreState,
      actions: { payload: SetChatsPayload }
    ) => {
      console.log("setChats", actions.payload);
      return {
        ...state,
        chats: actions.payload,
      };
    },
    setMessage: (
      state: ChatStoreState,
      actions: { payload: SetMessagePaylaod }
    ) => {
      console.log("setMessage", actions.payload);
      const newMessages: MessageEz[] = [actions.payload];
      const newMessagesIds = newMessages.map((message) => message.id);

      return {
        ...state,
        messages: [
          ...state.messages.filter(
            (message) => !newMessagesIds.includes(message.id)
          ),
          ...newMessages,
        ],
      };
    },
    setMessages: (
      state: ChatStoreState,
      actions: { payload: SetMessagesPaylaod }
    ) => {
      console.log("setMessages", actions.payload);
      const newMessages: MessageEz[] = actions.payload;
      const newMessagesIds = newMessages.map((message) => message.id);

      return {
        ...state,
        messages: [
          ...state.messages.filter(
            (message) => !newMessagesIds.includes(message.id)
          ),
          ...newMessages,
        ],
      };
    },
    setChatTitleReducer: (
      state: ChatStoreState,
      actions: { payload: SetChatTitlePayload }
    ) => {
      console.log("setChatTitleReducer", actions.payload);
      const { chatId, title } = actions.payload;
      const chat = state.chats.find((chat) => chat.id === chatId);
      if (chat) {
        chat.title = title;
        return {
          ...state,
          chats: [...state.chats.filter((chat) => chat.id !== chatId), chat],
        };
      } else {
        return state;
      }
    },
    initializeForUser: (
      state: ChatStoreState,
      actions: { payload: InitializeForUserPayload }
    ) => {
      console.log("initializeForUser", actions.payload);
      return {
        ...state,
        chats: [],
        messages: [],
      };
    },
  },
});

export const {
  setChat,
  setChats,
  setMessage,
  setMessages,
  setChatTitleReducer,
  initializeForUser,
} = chatSlice.actions;

// === ACTIONS ===
export type CreateChatParams = {
  userId: string;
};
export const createChat = createAsyncThunk<void, CreateChatParams, ThunkExtra>(
  "chat/createChat",
  async (params, { getState, dispatch, extra: { chatClient } }) => {
    console.log("chat/createChat", params);
    const req = new CreateChatRequestEz(params.userId);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    const res = await chatClient.createChat(req, metadata);
    const chat = res.getChat() as ChatObjectEz;
    dispatch(setChat(chat));
  }
);

export type GetChatsParams = {
  userId: string;
};
export const getChats = createAsyncThunk<void, GetChatsParams, ThunkExtra>(
  "chat/getChats",
  async (params, { getState, dispatch, extra: { chatClient } }) => {
    console.log("chat/getChats", params);
    const req = new GetChatsRequestEz(params.userId);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    const res = await chatClient.getChats(req, metadata);
    const chats = res.getChatsList() as ChatObjectEz[];
    dispatch(setChats(chats));
  }
);

export type StreamChatsParams = GetChatsParams;
export const streamChats = createAsyncThunk<
  void,
  StreamChatsParams,
  ThunkExtra
>(
  "chat/streamChats",
  async (
    params,
    { getState, dispatch, rejectWithValue, extra: { chatClient } }
  ) => {
    console.log("chat/streamChats", params);
    const req = new GetChatsRequestEz(params.userId);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    const stream = chatClient.streamChats(
      req,
      metadata
    ) as ClientReadableStream<GetChatsResponseEz>;

    stream.on("data", (res: GetChatsResponseEz) => {
      const chats = res.chats as ChatObjectEz[];
      dispatch(setChats(chats));
    });

    stream.on("error", (error: Error) => {
      rejectWithValue(error);
    });
  }
);

export type GetChatMessagesParams = {
  chatId: string;
};
export const getChatMessages = createAsyncThunk<
  void,
  GetChatMessagesParams,
  ThunkExtra
>(
  "chat/getChatMessages",
  async (params, { getState, dispatch, extra: { chatClient } }) => {
    console.log("chat/getChatMessages", params);
    const req = new GetChatMessagesRequestEz(params.chatId);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    const res = await chatClient.getChatMessages(req, metadata);
    const messages = res.getMessagesList() as MessageEz[];
    dispatch(setMessages(messages));
  }
);

export type SetChatTitleParams = {
  chatId: string;
  title: string;
};
export const setChatTitle = createAsyncThunk<
  void,
  SetChatTitleParams,
  ThunkExtra
>(
  "chat/setChatTitle",
  async (params, { getState, dispatch, extra: { chatClient } }) => {
    console.log("chat/setChatTitle", params);
    const req = new SetChatTitleRequestEz(params.chatId, params.title);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    chatClient.setChatTitle(req, metadata);
    dispatch(
      setChatTitleReducer({
        chatId: req.chatId,
        title: req.title ?? "",
      })
    );
  }
);

export type AddMessageParams = {
  chatId: string;
  text: string;
  sender: MessageSender;
};
export const addMessage = createAsyncThunk<void, AddMessageParams, ThunkExtra>(
  "chat/addMessage",
  async (params, { getState, dispatch, extra: { chatClient } }) => {
    console.log("chat/addMessage", params);
    const req = new AddMessageRequestEz(
      params.chatId,
      params.text,
      params.sender
    );
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    const res = await chatClient.addMessage(req, metadata);
    const message = res.getMessage() as MessageEz;
    dispatch(setMessage(message));
  }
);

// === SELECTORS ===
export const selectChatStore = (state: RootState): ChatStoreState => state.chat;

// === EXPORT ===
export default chatSlice.reducer;
