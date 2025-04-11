import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification } from "../store/notificationSlice";

const ProtectedRoute = ({ permissionGiven, permissionsList, element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!permissionsList || !permissionsList.includes(permissionGiven)) {
      navigate(-1);
      dispatch(
        showNotification({
          message:
            "you are not allowed to access these resources, Log in as an admin",
          severity: "warning",
        })
      );
    }
  }, [permissionsList, permissionGiven, navigate]);

  return (
    <>
      {permissionsList && permissionsList.includes(permissionGiven)
        ? element
        : null}
    </>
  );
};

export default ProtectedRoute;
