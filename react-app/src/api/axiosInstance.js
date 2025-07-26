import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export const register = (userData) => {
  return instance.post("/register", userData);
};
export const login = ({ email, password }) => {
  return instance.post('/login', { email, password });
};

export const logoutUser = () => {
  return instance.post("/logout");
};
export default instance;
