import { createSlice } from "@reduxjs/toolkit";

const globalErrorSlice = createSlice({
  name: "globalError",
  initialState: {
    globalError: null,
  },
  reducers: {
    setGlobalError: (state, action) => {
      state.globalError = action.payload;
    },
    clearGlobalError: (state) => {
      state.globalError = null;
    },
  },
});

export const { setGlobalError, clearGlobalError } = globalErrorSlice.actions; 
export default globalErrorSlice.reducer;
