import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPermissions = createAsyncThunk(
  "permissions/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios("/api/v1/get-permissions"); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      console.error("Error fetching permissions:", error.response);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const permissionsSlice = createSlice({
  name: "permissions",
  initialState: {
    permissions: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPermissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPermissions.fulfilled, (state, action) => {
        state.loading = false;
        state.permissions = action.payload;
        state.error = null;
      })
      .addCase(fetchPermissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default permissionsSlice.reducer;
