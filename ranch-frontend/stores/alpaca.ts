import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  AlpacaState,
  GetStateRequest,
  GetStateRequestEz,
  GetStateResponse,
  GetStateResponseEz,
  PromptRequest,
  PromptRequestEz,
  PromptResponse,
  PromptResponseEz,
} from "ranch-proto/dist/pb";
import { RootState, ThunkExtra } from "./rootStore";
import { ClientReadableStream } from "grpc-web";
import { init } from "next/dist/compiled/@vercel/og/satori";
import { selectGrpcAuthMetadata } from "./auth";

// === STORE ===
export interface AlpacaStoreState {
  id: string | undefined;
  state: AlpacaState | undefined;
  promptResponse: string | undefined;
  promptRunning: boolean;
}

export const initialAlpacaState: AlpacaStoreState = {
  id: undefined,
  state: undefined,
  promptResponse: undefined,
  promptRunning: false,
};

type SetStatePayload = Pick<AlpacaStoreState, "id" | "state">;
type AppendPromptResultPayload = string;

// === REDUCER ===
export const alpacaSlice = createSlice({
  name: "alpaca",
  initialState: initialAlpacaState,
  reducers: {
    setState: (
      _state: AlpacaStoreState,
      actions: { payload: SetStatePayload }
    ) => {
      return {
        ..._state,
        ...actions.payload,
      };
    },
    appendPromptResult: (
      state: AlpacaStoreState,
      actions: { payload: AppendPromptResultPayload }
    ) => {
      return {
        ...state,
        promptResponse: state.promptResponse
          ? state.promptResponse + actions.payload
          : actions.payload,
        promptRunning: true,
      };
    },
    initPromptResult: (state: AlpacaStoreState) => {
      return {
        ...state,
        promptResponse: undefined,
        promptRunning: true,
      };
    },
    stopPromptRunning: (state: AlpacaStoreState) => {
      return {
        ...state,
        promptRunning: false,
      };
    },
  },
});

export const {
  setState,
  appendPromptResult,
  initPromptResult,
  stopPromptRunning,
} = alpacaSlice.actions;

// === ACTIONS ===
type StreamStateParams = {
  id: string;
};

export const streamState = createAsyncThunk<
  void,
  StreamStateParams,
  ThunkExtra
>(
  "alpaca/streamState",
  async (
    params,
    { getState, dispatch, rejectWithValue, extra: { alpacaClient } }
  ) => {
    const request = new GetStateRequestEz(params.id);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);

    const stream = alpacaClient.streamState(
      request,
      metadata
    ) as ClientReadableStream<GetStateResponse>;

    stream.on("data", (protoResponse: GetStateResponse) => {
      const response = protoResponse as GetStateResponseEz;
      dispatch(
        setState({
          id: response.id,
          state: response.state,
        })
      );
    });

    stream.on("end", () => {});

    stream.on("error", (error: any) => {
      console.log("alpaca/streamState error", error)
      rejectWithValue(error);
    });
  }
);

type GetStateParams = StreamStateParams;

export const getState = createAsyncThunk<void, GetStateParams, ThunkExtra>(
  "alpaca/getState",
  async (
    params,
    { getState, dispatch, rejectWithValue, extra: { alpacaClient } }
  ) => {
    const protoRequest = new GetStateRequestEz(params.id);
    try {
      const metadata = selectGrpcAuthMetadata(getState() as RootState);
      const protoResponse = await alpacaClient.getState(protoRequest, metadata);
      const response = protoResponse as GetStateResponseEz;
      dispatch(
        setState({
          id: response.id,
          state: response.state,
        })
      );
    } catch (error) {
      console.log("alpaca/getState error", error);
      rejectWithValue(error);
    }
  }
);

type StreamPromptParams = {
  id: string;
  prompt: string;
};

export const streamPrompt = createAsyncThunk<
  void,
  StreamPromptParams,
  ThunkExtra
>(
  "alpaca/streamPrompt",
  async (
    params,
    { getState, dispatch, rejectWithValue, extra: { alpacaClient } }
  ) => {
    const protoRequest = new PromptRequestEz(params.id, params.prompt);
    const metadata = selectGrpcAuthMetadata(getState() as RootState);
    const stream = alpacaClient.prompt(
      protoRequest,
      metadata
    ) as ClientReadableStream<PromptResponse>;

    dispatch(initPromptResult());

    stream.on("data", (protoResponse: PromptResponse) => {
      const response = protoResponse as PromptResponseEz;
      dispatch(appendPromptResult(response.text));
    });

    stream.on("end", () => {
      dispatch(stopPromptRunning());
    });

    stream.on("error", (error: any) => {
      console.log("alpaca/streamPrompt error", error);
      rejectWithValue(error);
    });
  }
);

// === SELECTORS ===
export const selectAlpacaStore = (state: RootState): AlpacaStoreState =>
  state.alpaca;

// === EXPORT ===
export default alpacaSlice.reducer;
