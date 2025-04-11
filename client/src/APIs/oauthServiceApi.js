import axios from "../axios";
import config from "../config";

const signupUser = async (user) => {
  try {
    const response = await axios.post(`${config.baseURL}/oauth/signup`, user);
    return response;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (user) => {
  try {
    const response = await axios.post(`${config.baseURL}/oauth/login`, user);
    return response;
  } catch (error) {
    throw error;
  }
};

const accessUserRolePermissions = async () => {
  try {
    const roleAndPermissions = await axios.get(
      `${config.baseURL}/oauth/role/access`
    );
    return roleAndPermissions.data;
  } catch (err) {
    throw err;
  }
};

export default {
  signupUser,
  loginUser,
  accessUserRolePermissions,
};
