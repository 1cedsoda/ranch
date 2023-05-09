import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState, ThunkExtra } from './rootStore'

export interface AuthState {
    username: string | undefined
}

export const initialAuthState: AuthState = {
    username: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {},
})

export const selectAuthStore = (state: RootState) => state.auth
