import { configureStore } from "@reduxjs/toolkit"
import { AlpacaClient } from "ranch-proto"
import { ChannelCredentials } from "@grpc/grpc-js"
import { AuthState, authSlice, initialAuthState } from "./auth"
import { AlpacaStoreState, alpacaSlice, initialAlpacaState } from "./alpaca"

export type RootState = {
    alpaca: AlpacaStoreState,
    auth: AuthState
}

export const initialRootStore: RootState = {
    alpaca: initialAlpacaState,
    auth: initialAuthState
}

export type ThunkExtra = {
    extra: {
        alpacaClient: AlpacaClient;
    };
  };

export const createStore = () => 
    configureStore({
        reducer: {
            alpaca: alpacaSlice.reducer,
            auth: authSlice.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    alpacaClient: new AlpacaClient('http://localhost:4000', ChannelCredentials.createInsecure())
                }
            }
        })
    })