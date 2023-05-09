import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import * as proto from 'ranch-proto'
import * as models from 'ranch-proto/dist/models'
import { ThunkExtra } from './rootStore'

// === STORE ===
export interface AlpacaStoreState {
    id: string | undefined
    state: proto.AlpacaState | undefined,
    promptResponse: string | undefined,
    promptRunning: boolean
}

export const initialAlpacaState: AlpacaStoreState = {
    id: undefined,
    state: undefined,
    promptResponse: undefined,
    promptRunning: false
}

type SetStatePayload = Pick<AlpacaStoreState, 'id' | 'state'>
type AppendPromptResultPayload = string

// === REDUCER ===
export const alpacaSlice = createSlice({
    name: 'alpaca',
    initialState: initialAlpacaState,
    reducers: {
        setState: (state: AlpacaStoreState, actions: { payload: SetStatePayload }) => {
            return {
                ...state,
                id: actions.payload.id,
                state: actions.payload.state,
            }
        },
        appendPromptResult: (state: AlpacaStoreState, actions: { payload: AppendPromptResultPayload }) => {
            return {
                ...state,
                promptResponse: state.promptResponse ? state.promptResponse + actions.payload : actions.payload,
                promptRunning: true
            }
        },
        stopPromptRunning: (state: AlpacaStoreState) => {
            return {
                ...state,
                promptRunning: false
            }
        }
    }
})

export const { setState, appendPromptResult, stopPromptRunning } = alpacaSlice.actions


// === ACTIONS ===
type StreamStateParams = {
  id: string
}

export const streamState = createAsyncThunk<void, StreamPromptParams, ThunkExtra>(
    "alpaca/streamState",
    async (params, { dispatch, rejectWithValue, extra: { alpacaClient } }) => {
      const protoRequest = new models.GetStateRequest(params.id).toProto();
      const stream = alpacaClient.streamState(protoRequest);
  
      stream.on("data", (protoResponse: proto.GetStateResponse) => {
        let reponse = models.GetStateResponse.fromProto(protoResponse);
        dispatch(setState(reponse));
      });
  
      stream.on("end", () => {});
  
      stream.on("error", (error) => {
        rejectWithValue(error);
      });
    }
  );

type GetStateParams = StreamStateParams

export const getState = createAsyncThunk<void, GetStateParams, ThunkExtra>(
    "alpaca/getState",
    async (params, { dispatch, rejectWithValue, extra: { alpacaClient } }) => {
        const protoRequest = new models.GetStateRequest(params.id).toProto();
        const response = alpacaClient.getState(protoRequest, (err, protoRes) => {
            if (err) {
                rejectWithValue(err);
            } else {
                let res = models.GetStateResponse.fromProto(protoRes);
                dispatch(setState(res));
            }
        });
    }
);

type StreamPromptParams = {
    id: string
    prompt: string
}

export const streamPrompt = createAsyncThunk<void, StreamPromptParams, ThunkExtra>(
    "alpaca/streamPrompt",
    async (params, { dispatch, rejectWithValue, extra: { alpacaClient } }) => {
      const protoRequest = new models.PromptRequest(params.id, params.prompt).toProto();
      const stream = alpacaClient.prompt(protoRequest);
  
      stream.on("data", (protoResponse: proto.PromptResponse) => {
        let reponse = models.PromptResponse.fromProto(protoResponse);
        dispatch(appendPromptResult(reponse.text));
      });
  
      stream.on("end", () => {
        dispatch(stopPromptRunning());
      });
  
      stream.on("error", (error) => {
        rejectWithValue(error);
      });
    }
  );

// === SELECTORS ===
export const selectAlpacaState = (state: any): AlpacaStoreState => state.alpaca

export const selectAlpacaId = createSelector(
    selectAlpacaState,
    (state: AlpacaStoreState) => state.id
)

export const selectAlpacaStateState = createSelector(
    selectAlpacaState,
    (state: AlpacaStoreState) => state.state
)

// === EXPORT ===
export default alpacaSlice.reducer
