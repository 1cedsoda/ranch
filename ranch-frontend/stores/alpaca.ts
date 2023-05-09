import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { AlpacaState, GetStateRequest, GetStateRequestEz, GetStateResponse, GetStateResponseEz, PromptRequest, PromptRequestEz, PromptResponse, PromptResponseEz } from 'ranch-proto/dist/pb'
import { RootState, ThunkExtra } from './rootStore'
import { ClientReadableStream } from 'grpc-web'

// === STORE ===
export interface AlpacaStoreState {
    id: string | undefined
    state: AlpacaState | undefined,
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
      const request = new GetStateRequestEz(params.id);
      const stream = alpacaClient.streamState(request) as ClientReadableStream<GetStateResponse>;
  
      stream.on("data", (protoResponse: GetStateResponse) => {
        const response = protoResponse as GetStateResponseEz;
        dispatch(setState({
          id: response.id,
          state: response.state
        }));
      });
  
      stream.on("end", () => {});
  
      stream.on("error", (error: any) => {
        rejectWithValue(error);
      });
    }
  );

type GetStateParams = StreamStateParams

export const getState = createAsyncThunk<void, GetStateParams, ThunkExtra>(
    "alpaca/getState",
    async (params, { dispatch, rejectWithValue, extra: { alpacaClient } }) => {
        const protoRequest = new GetStateRequestEz(params.id);
        try {
          const protoResponse = await alpacaClient.getState(protoRequest);
          const response = protoResponse as GetStateResponseEz;
          dispatch(setState({
            id: response.id,
            state: response.state
          }));
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export type StreamPromptParams = {
    id: string
    prompt: string
}

export const streamPrompt = createAsyncThunk<void, StreamPromptParams, ThunkExtra>(
    "alpaca/streamPrompt",
    async (params, { dispatch, rejectWithValue, extra: { alpacaClient } }) => {
      const protoRequest = new PromptRequestEz(params.id, params.prompt);
      const stream = alpacaClient.prompt(protoRequest) as ClientReadableStream<PromptResponse>;
  
      stream.on("data", (protoResponse: PromptResponse) => {
        const response = protoResponse as PromptResponseEz;
        dispatch(appendPromptResult(response.text));
      });
  
      stream.on("end", () => {
        dispatch(stopPromptRunning());
      });
  
      stream.on("error", (error: any) => {
        rejectWithValue(error);
      });
    }
  );

// === SELECTORS ===
export const selectAlpacaStore = (state: RootState): AlpacaStoreState => state.alpaca

// === EXPORT ===
export default alpacaSlice.reducer
