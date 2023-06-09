import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState, ThunkExtra } from "./rootStore";
import {
  LoginRequestEz,
  LoginResponse,
  LoginResponseEz,
} from "ranch-proto/dist/pb";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getState } from "./alpaca";
interface MyJwtPayload extends JwtPayload {
  userId: string;
  username: string;
}

// === STORE ===
export interface AuthState {
  userId: string | undefined;
  username: string | undefined;
  token: string | undefined;
  loading: "idle" | "pending" | "rejected";
}

export const initialAuthState: AuthState = {
  userId: undefined,
  username: undefined,
  token: undefined,
  loading: "idle",
};

// === REDUCER ===
type LoginSuccessPayload = {
  userId: string;
  username: string;
  token: string;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    loginPending: (state: AuthState, action) => {
      state.loading = "pending";
    },
    loginSuccess: (
      state: AuthState,
      action: { payload: LoginSuccessPayload }
    ) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.loading = "idle";
      persistJwt(action.payload.token);
    },
    loginFailure: (state: AuthState, action) => {
      state.loading = "rejected";
    },
    logoutReducer: (state: AuthState, action) => {
      state.userId = undefined;
      state.username = undefined;
      state.token = undefined;
      state.loading = "idle";
      persistJwt(undefined);
    },
  },
});

async function persistJwt(token: string | undefined) {
  // save jwt to local storage
  if (token) {
    localStorage.setItem("jwt", token);
  } else {
    localStorage.removeItem("jwt");
  }
}

export const { loginPending, loginSuccess, loginFailure, logoutReducer } =
  authSlice.actions;

// === ACTIONS ===
export const selectAuthStore = (state: RootState) => state.auth;

export const selectGrpcAuthMetadata = createSelector(
  selectAuthStore,
  (auth) => {
    if (!auth.token) {
      return undefined;
    }
    return {
      "token": auth.token,
    };
  }
);

export type LoginParams = {
  username: string;
  password: string;
};
export const login = createAsyncThunk<void, LoginParams, ThunkExtra>(
  "auth/login",
  async (payload, { dispatch, rejectWithValue, extra: { authClient } }) => {
    console.log("auth/login", payload);
    const { username, password } = payload;
    dispatch(loginPending(null));
    const req = new LoginRequestEz(username, password);
    authClient
      .login(req)
      .then((_res: LoginResponse) => {
        let res = _res as LoginResponseEz;
        let _token = jwt.decode(res.jwt);
        if (typeof _token === "string" || !_token) {
          dispatch(loginFailure(new Error("Invalid token")));
        }
        let token = _token as MyJwtPayload;
        dispatch(
          loginSuccess({
            userId: token!.userId,
            username: token!.username,
            token: res.jwt,
          })
        );
      })
      .catch((err: Error) => {
        dispatch(loginFailure(err));
      });
  }
);

export const logout = createAsyncThunk<void, void, ThunkExtra>(
  "auth/logout",
  async (payload, { dispatch }) => {
    console.log("auth/logout", payload);
    dispatch(logoutReducer(null));
  }
);

export const loadFromLocalStorage = createAsyncThunk<void, void, ThunkExtra>(
  "auth/loadFromLocalStorage",
  async (payload, { dispatch, rejectWithValue }) => {
    console.log("auth/loadFromLocalStorage", payload);

    const token = localStorage.getItem("jwt");
    if (!token) {
      console.log("auth/loadFromLocalStorage: No token")
      return rejectWithValue(undefined);
    }

    const decoded = jwt.decode(token);
    if (typeof decoded === "string" || !decoded) {
      console.log("auth/loadFromLocalStorage: Invalid token")
      return rejectWithValue(undefined);
    }

    const jwtPayload = decoded as MyJwtPayload;

    dispatch(loginSuccess({
      userId: jwtPayload.userId,
      username: jwtPayload.username,
      token: token,
    }));
  }
);