import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit"
import { AlpacaPromiseClient, AuthPromiseClient, ChatClient, ChatPromiseClient } from "ranch-proto/dist/grpc_web"
import { AuthState, authSlice, initialAuthState } from "./auth"
import { AlpacaStoreState, alpacaSlice, initialAlpacaState } from "./alpaca"
import { useDispatch } from "react-redux"
import { ChatStoreState, chatSlice, initialChatState } from "./chat"

export type RootState = {
    alpaca: AlpacaStoreState,
    auth: AuthState,
    chat: ChatStoreState
}

export const initialRootStore: RootState = {
    alpaca: initialAlpacaState,
    auth: initialAuthState,
    chat: initialChatState
}

export type RootThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useRootDispatch = () => useDispatch<RootThunkDispatch>();

export type ThunkExtra = {
    extra: {
        alpacaClient: AlpacaPromiseClient;
        chatClient: ChatPromiseClient;
        authClient: AuthPromiseClient;
    };
  };

export const createStore = () => 
    configureStore({
        reducer: {
            alpaca: alpacaSlice.reducer,
            auth: authSlice.reducer,
            chat: chatSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    alpacaClient: new AlpacaPromiseClient('http://localhost:8081'),
                    chatClient: new ChatPromiseClient('http://localhost:8081'),
                    authClient: new AuthPromiseClient('http://localhost:8081')
                }
            }
        })
    })