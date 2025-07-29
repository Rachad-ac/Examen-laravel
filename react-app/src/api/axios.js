import axios from "axios";

const axiosApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  console.log("Token envoyé :", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expiré ou invalide. Suppression du token...");
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default axiosApi;
