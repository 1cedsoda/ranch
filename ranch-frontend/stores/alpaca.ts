import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import * as proto from 'ranch-proto'
import { RootState, ThunkExtra } from './rootStore'

export interface AlpacaState {
    id: string | undefined
    state: proto.AlpacaState | undefined
}

export const initialAlpacaState: AlpacaState = {
    id: undefined,
    state: undefined
}

export const alpacaSlice = createSlice({
    name: 'alpaca',
    initialState: initialAlpacaState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchAlpacaRunner.pending, (state: AlpacaState, action: { payload: FetchAlpacaRunnerParams }) => {
            state.id = action.payload.id
            state.state = undefined
        })
        builder.addCase(fetchAlpacaRunner.fulfilled, (state: AlpacaState, action: { payload: FetchAlpacaRunenrPayload }) => {
            state.id = action.payload.id
            state.state = action.payload.state
        })
    }
})

export const selectAlpacaStore = (state: RootState) => state.alpaca

type FetchAlpacaRunnerParams = {
    id: string
}
type FetchAlpacaRunenrPayload = {
    id: string
    state: proto.AlpacaState
}
export const fetchAlpacaRunner = createAsyncThunk<AlpacaState, FetchAlpacaRunnerParams,ThunkExtra>(
    'alpaca/fetchAlpacaRunner',
    async ({ id }, { getState, extra: { alpacaService } }) => {
        const request = new proto.AlpacaGetRequest()
        .setId(id)

        const response = await new Promise<proto.AlpacaGetReply>((resolve, reject)=>{
            alpacaService.getAlpaca(request, (err, res)=>{
                if (err) reject(err)
                else resolve(res)
            })
        })

        return {
            id: response.getId(),
            state: response.getState()
        }
    })