import React from "react";
import { useSelector } from "react-redux";

const ProtectedComponent = ({ permissionGiven, children }) => {
  const { permissions: permissionsList } = useSelector((state) => state.oAuth);

  const hasPermission =
    permissionsList && permissionsList.includes(permissionGiven);

  return <>{hasPermission ? children : null}</>;
};

export default ProtectedComponent;
