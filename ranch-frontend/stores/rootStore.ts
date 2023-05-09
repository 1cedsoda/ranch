import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit"
import { AlpacaPromiseClient } from "ranch-proto/dist/grpc_web"
import { AuthState, authSlice, initialAuthState } from "./auth"
import { AlpacaStoreState, alpacaSlice, initialAlpacaState } from "./alpaca"
import { useDispatch } from "react-redux"

export type RootState = {
    alpaca: AlpacaStoreState,
    auth: AuthState
}

export const initialRootStore: RootState = {
    alpaca: initialAlpacaState,
    auth: initialAuthState
}

export type RootThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useRootDispatch = () => useDispatch<RootThunkDispatch>();

export type ThunkExtra = {
    extra: {
        alpacaClient: AlpacaPromiseClient;
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
                    alpacaClient: new AlpacaPromiseClient('http://localhost:8081')
                }
            }
        })
    })