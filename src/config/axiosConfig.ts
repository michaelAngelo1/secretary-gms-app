import axios from "axios";

const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL;

console.log("backend api url: ", backendApiUrl);

export const loginInstance = axios.create({
  baseURL: `${backendApiUrl}/login`,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

export const registerInstance = axios.create({
  baseURL: `${backendApiUrl}/register`,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

export const logoutInstance = (token: string) => axios.create({
  baseURL: `${backendApiUrl}/logout`,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});