import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:8080",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

class ApiService {
  async get() {
    await this.timeout();
  }

  private async timeout() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }
}

export const apiService = new ApiService();
