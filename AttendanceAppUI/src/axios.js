import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {

    }
    return Promise.reject(error);
  }
);

export default axios;
