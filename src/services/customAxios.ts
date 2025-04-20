import axios from "axios";

const CustomAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

CustomAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    // quick redirect logic, change to error boundary later
    if (status === 403) {
      window.location.href = "/403";
    } else if (status === 404) {
      window.location.href = "/404";
    }

    return Promise.reject(error);
  },
);

export default CustomAxios;
