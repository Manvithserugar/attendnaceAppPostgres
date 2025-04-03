import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentsSlice";
import settingsReducer from "./settingsSlice";
import oAuthReducer from "./oAuthSlice";
import notificationReducer from "./notificationSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
    settings: settingsReducer,
    oAuth: oAuthReducer,
    notification: notificationReducer,
  },
});

export default store;
