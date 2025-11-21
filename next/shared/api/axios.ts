import axios, { AxiosResponse } from "axios";
const API_PORT = `${process.env.NEXT_PUBLIC_BE_URL || "http://localhost:9000"}/`;

export const createApi = () => {
  return axios.create({
    baseURL: API_PORT,
  });
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
  const axios = createApi();
  if (method === "delete") {
    return await axios.delete<Y>(path);
  }
  return await axios[method](path, data);
};

export const AxiosQuery = async <T>(
  path: string,
): Promise<AxiosResponse<T>> => {
  const axios = createApi();
  return await axios.get(path);
};
