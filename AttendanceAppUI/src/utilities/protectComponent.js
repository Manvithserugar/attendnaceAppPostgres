import { useSelector } from "react-redux";

const withPermission = (Component, requiredPermission) => {
  return (props) => {
    const { permissions } = useSelector((state) => state.permissions);

    if (!permissions || !permissions[requiredPermission]) {
      return <div>Access Denied</div>;
    }

    return <Component {...props} />;
  };
};

export default withPermission;
