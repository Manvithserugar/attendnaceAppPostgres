import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../store/notificationSlice";
import { useEffect } from "react";

const ProtectedRoute = ({ children, requiredPermission }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { permissions } = useSelector((state) => state.oAuth);
  console.log(permissions);

  const hasAccess = requiredPermission
    ? permissions.includes(requiredPermission)
    : false;

  useEffect(() => {
    if (!hasAccess) {
      dispatch(
        showNotification({
          message: "You are not authorized to access this page",
          severity: "warning",
        })
      );
    }
  }, [hasAccess, dispatch]);

  return hasAccess ? children : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
