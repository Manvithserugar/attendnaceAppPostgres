import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentAPI from "../APIs/studentAPI";

const initialState = {
  studentsAttendance: [],
  isLoadingAttendance: false,
  errorAttendance: null,
  studentsDetails: [],
  isLoadingStudentsDetails: false,
  errorStudentsDetails: null,
};

const studentsSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {
    clearStudentsAttendance(state) {
      state.studentsAttendance = initialState.studentsAttendance;
    },
    clearErrorAttendance(state) {
      state.errorAttendance = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAttendance.pending, (state) => {
        state.isLoadingAttendance = true;
        state.errorAttendance = null;
        state.studentsAttendance = [];
      })
      .addCase(getStudentsAttendance.fulfilled, (state, action) => {
        state.isLoadingAttendance = false;
        state.studentsAttendance = action.payload;
        state.errorAttendance = null;
      })
      .addCase(getStudentsAttendance.rejected, (state, action) => {
        state.errorAttendance = action.payload;
        state.isLoadingAttendance = false;
        state.studentsAttendance = [];
      })
      .addCase(markAttendance.pending, (state) => {
        state.isLoadingAttendance = true;
        state.errorAttendance = null;
      })
      .addCase(markAttendance.fulfilled, (state) => {
        state.isLoadingAttendance = false;
        state.errorAttendance = null;
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.isLoadingAttendance = false;
        state.errorAttendance = action.payload;
      })
      .addCase(getStudentsDetails.pending, (state) => {
        state.isLoadingStudentsDetails = true;
        state.errorStudentsDetails = null;
        state.studentsDetails = [];
      })
      .addCase(getStudentsDetails.fulfilled, (state, action) => {
        state.isLoadingStudentsDetails = false;
        state.studentsDetails = action.payload;
        state.errorStudentsDetails = null;
      })
      .addCase(getStudentsDetails.rejected, (state, action) => {
        state.errorStudentsDetails = action.payload;
        state.isLoadingStudentsDetails = false;
        state.studentsDetails = [];
      })
      .addCase(deleteStudentById.pending, (state) => {
        state.isLoadingStudentsDetails = true;
        state.errorStudentsDetails = null;
      })
      .addCase(deleteStudentById.fulfilled, (state, action) => {
        state.isLoadingStudentsDetails = false;
        state.errorStudentsDetails = null;
      })
      .addCase(deleteStudentById.rejected, (state, action) => {
        state.errorStudentsDetails = action.payload;
        state.isLoadingStudentsDetails = false;
      })
      .addCase(updateStudent.pending, (state) => {
        state.isLoadingStudentsDetails = true;
        state.errorStudentsDetails = null;
      })
      .addCase(updateStudent.fulfilled, (state) => {
        state.isLoadingStudentsDetails = false;
        state.errorStudentsDetails = null;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.isLoadingStudentsDetails = false;
        state.errorStudentsDetails = action.payload;
      })
      .addCase(addStudent.pending, (state) => {
        state.isLoadingStudentsDetails = true;
        state.errorStudentsDetails = null;
      })
      .addCase(addStudent.fulfilled, (state) => {
        state.isLoadingStudentsDetails = false;
        state.errorStudentsDetails = null;
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.isLoadingStudentsDetails = false;
        state.errorStudentsDetails = action.payload;
      });
  },
});

export const getStudentsAttendance = createAsyncThunk(
  "students/getStudentsAttendance",
  async (date, thunkAPI) => {
    try {
      const studentsAttendance = await studentAPI.getStudents(date);
      return studentsAttendance;
    } catch (error) {
      console.error("Error fetching students' attendance:", error.response);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const markAttendance = createAsyncThunk(
  "students/markAttendance",
  async ({ date, studentIds }, thunkAPI) => {
    try {
      const response = await studentAPI.markAttendance(date, studentIds);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getStudentsDetails = createAsyncThunk(
  "students/getStudentDetails",
  async (thunkAPI) => {
    try {
      const studentsDetails = await studentAPI.getStudentsDetails();
      return studentsDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const deleteStudentById = createAsyncThunk(
  "students/deleteStudent",
  async (id, thunkAPI) => {
    try {
      await studentAPI.deleteStudent(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async ({ id, updatedBody }, thunkAPI) => {
    console.log(updatedBody);
    try {
      await studentAPI.updateStudent(id, updatedBody);
    } catch (error) {
      console.log(error.response);

      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async ({ name, email, phone, selectedClass }, thunkAPI) => {
    try {
      await studentAPI.addStudent({ name, email, phone, selectedClass });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const {
  clearStudentsAttendance,
  clearIsLoadingAttendance,
  clearErrorAttendance,
  clearErrorStudentsDetails,
  clearIsLoadingStudentsDetails,
  clearStudentsDetails,
} = studentsSlice.actions;
export default studentsSlice.reducer;
