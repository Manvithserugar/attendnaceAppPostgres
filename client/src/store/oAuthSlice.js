import oauthApi from "../APIs/oauthServiceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  role: "",
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

export const fetchRolePermissions = createAsyncThunk(
  "oauth/fetchRolePermissions",
  async (_, thunkAPI) => {
    try {
      let roleAndPermissions = await oauthApi.accessUserRolePermissions();
      return roleAndPermissions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const logUserOut = createAsyncThunk(
  "oauth/logUserOut",
  async (_, thunkAPI) => {
    try {
      const response = await oauthApi.logUserOut();
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
      })
      .addCase(fetchRolePermissions.pending, (state) => {
        state.error = null;
        state.permissions = [];
        state.role = "";
      })
      .addCase(fetchRolePermissions.fulfilled, (state, action) => {
        state.error = null;
        state.permissions = action.payload.permissions;
        state.role = action.payload.role;
      })
      .addCase(fetchRolePermissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.permissions = [];
        state.role = "";
      })
      .addCase(logUserOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logUserOut.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logUserOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default oauthSlice.reducer;
