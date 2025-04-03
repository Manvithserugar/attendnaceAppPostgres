import { isRejectedWithValue } from "@reduxjs/toolkit";
import { showNotification } from "../store/notificationSlice";
import { setGlobalError, clearGlobalError } from "../store/globalErrorSlice";

export const reduxErrorHandler = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errorDetails = action.payload;
    const errorCode = errorDetails?.status || "Unknown Error Code";

    if (errorCode == 401) {
      api.dispatch(
        showNotification({
          message: "User not found, please login",
          severity: "error",
        })
      );
    } else if (errorCode == 403) {
      dispatch(
        showNotification({
          message: "U are not authorized to access the resource!!",
          severity: "error",
        })
      );
    } else {
        dispatch()
    }
  }
  if (isFulfilled(action)) {
    dispatch(
      setOauthError({
        errorCode: null,
        errorMsg: "",
      })
    );
  }
  return next(action);
};
