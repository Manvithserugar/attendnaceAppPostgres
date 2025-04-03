import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentsSlice";
import settingsReducer from "./settingsSlice";
import oAuthReducer from "./oAuthSlice";
import notificationReducer from "./notificationSlice";
import globalErrorReducer from "./globalErrorSlice";
import permissionsReducer from "./permissionsSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
    settings: settingsReducer,
    oAuth: oAuthReducer,
    notification: notificationReducer,
    globalError: globalErrorReducer,
    permissions: permissionsReducer,
  },
});

export default store;
