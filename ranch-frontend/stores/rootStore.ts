import { configureStore } from "@reduxjs/toolkit"
import { AlpacaClient } from "ranch-proto"
import { ChannelCredentials } from "@grpc/grpc-js"
import { AlpacaState, alpacaSlice, initialAlpacaState } from "./alpaca"
import { AuthState, authSlice, initialAuthState } from "./auth"

export type RootState = {
    alpaca: AlpacaState,
    auth: AuthState
}

export const initialRootStore: RootState = {
    alpaca: initialAlpacaState,
    auth: initialAuthState
}

export type ThunkExtra = {
    extra: {
        alpacaService: AlpacaClient;
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
                    alpacaService: new AlpacaClient('http://localhost:4000', ChannelCredentials.createInsecure())
                }
            }
        })
    })