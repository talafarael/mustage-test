import axios, { AxiosResponse } from "axios";

// Get backend URL from environment or use default
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:9000";
const API_PORT = BACKEND_URL.endsWith("/") ? BACKEND_URL : `${BACKEND_URL}/`;


export const createApi = () => {
  const api = axios.create({
    baseURL: API_PORT,
    timeout: 10000,
  });

  // Add request interceptor for logging
  api.interceptors.request.use(
    (config) => {
     
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  // Add response interceptor for logging
  api.interceptors.response.use(
    (response) => {
    
      return response;
    },
    (error) => {
    
      return Promise.reject(error);
    }
  );

  return api;
};
interface AxiosMutationParams<T> {
  path: string;
  data?: T;
  method?: "post" | "put" | "patch" | "delete";
}
export const AxiosMutation = async <T, Y>({
  path,
  data,
  method = "post",
}: AxiosMutationParams<T>): Promise<AxiosResponse<Y>> => {
  const axiosInstance = createApi();
  if (method === "delete") {
    return await axiosInstance.delete<Y>(path);
  }
  return await axiosInstance[method](path, data);
};

export const AxiosQuery = async <T>(
  path: string,
): Promise<AxiosResponse<T>> => {
  const axiosInstance = createApi();
  return await axiosInstance.get(path);
};

