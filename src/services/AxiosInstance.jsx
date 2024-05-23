import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://crud-api-lqb6.onrender.com/api',
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
