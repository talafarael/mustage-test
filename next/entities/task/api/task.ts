import { AxiosQuery } from "@/shared";
import { Task } from "../models";

export const getTasks = async (
  searchParam?: string,
  done?: boolean,
): Promise<Task[]> => {
  const params = new URLSearchParams();
  if (searchParam) params.append("search", searchParam);
  if (done !== undefined) params.append("done", done ? "true" : "false");

  const queryString = params.toString();
  const res = await AxiosQuery<Task[]>(
    `/tasks${queryString ? `?${queryString}` : ""}`,
  );
  return res?.data;
};
