import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsApi from "../APIs/settingsApi";

// Async Thunks
export const getDropdownOptions = createAsyncThunk(
  "settings/getDropdownOptions",
  async (_, thunkAPI) => {
    try {
      return await settingsApi.getDropdownOptions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const addDropdownOption = createAsyncThunk(
  "settings/addDropdownOption",
  async (option, thunkAPI) => {
    try {
      const response = await settingsApi.addDropdownOption(option);
      console.log("thunk", response);

      // debugger;
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const deleteDropdownOption = createAsyncThunk(
  "settings/deleteDropdownOption",
  async (optionToDelete, thunkAPI) => {
    try {
      await settingsApi.deleteDropdownOption(optionToDelete);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const downloadBackup = createAsyncThunk(
  "settings/downloadBackup",
  async (_, thunkAPI) => {
    try {
      const backupData = await settingsApi.downloadBackup();
      console.log(backupData);

      return backupData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

// Initial State
const initialState = {
  options: [],
  isLoadingDropdown: false,
  errorDropdown: null,
  backupData: [],
};

// Slice
const dropdownSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDropdownOptions.pending, (state) => {
        state.isLoadingDropdown = true;
        state.errorDropdown = null;
        state.options = [];
      })
      .addCase(getDropdownOptions.fulfilled, (state, action) => {
        state.isLoadingDropdown = false;
        state.options = action.payload;
        console.log(action.payload);

        state.errorDropdown = null;
      })
      .addCase(getDropdownOptions.rejected, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = action.payload;
        state.options = [];
      })

      .addCase(addDropdownOption.pending, (state) => {
        state.isLoadingDropdown = true;
        state.errorDropdown = null;
      })
      .addCase(addDropdownOption.fulfilled, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = null;
        console.log(action.payload);
      })
      .addCase(addDropdownOption.rejected, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = action.payload;
      })

      .addCase(deleteDropdownOption.pending, (state) => {
        state.isLoadingDropdown = true;
        state.errorDropdown = null;
      })
      .addCase(deleteDropdownOption.fulfilled, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = null;
      })
      .addCase(deleteDropdownOption.rejected, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = action.payload;
      })

      .addCase(downloadBackup.pending, (state) => {
        state.isLoadingDropdown = true;
        state.errorDropdown = null;
        state.backupData = [];
      })
      .addCase(downloadBackup.fulfilled, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = null;
        state.backupData = action.payload;
      })
      .addCase(downloadBackup.rejected, (state, action) => {
        state.isLoadingDropdown = false;
        state.errorDropdown = action.payload;
        state.backupData = [];
      });
  },
});

export default dropdownSlice.reducer;
