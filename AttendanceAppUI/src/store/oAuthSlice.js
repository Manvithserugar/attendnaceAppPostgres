import oauthApi from "../APIs/oauthServiceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  permissions: [],
};

export const signupUser = createAsyncThunk(
  "oauth/signupUser",
  async (user, thunkAPI) => {
    try {
      const response = await oauthApi.signupUser(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  "oauth/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await oauthApi.loginUser(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const oauthSlice = createSlice({
  name: "oauth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Signup Cases
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Login Cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, setOauthError } = oauthSlice.actions;
export default oauthSlice.reducer;
