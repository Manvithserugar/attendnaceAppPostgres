import axios from "../axios";
import config from "../config";

const signupUser = async (user) => {
  try {
    const response = await axios.post(`${config.baseURL}/oauth/signup`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (user) => {
  try {
    const response = await axios.post(`${config.baseURL}/oauth/login`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  signupUser,
  loginUser,
};
