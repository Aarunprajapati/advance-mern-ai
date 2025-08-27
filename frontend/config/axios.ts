// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // 👈 put your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // If you store token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 unauthorized, etc.
    if (error.response?.status === 401) {
      console.error("Unauthorized, redirect to login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
