import { AxiosQuery } from "@/shared/api/axios";
import { TaskModel } from "../model/task.model";

export const getTasks = async (
  searchParam?: string,
  done?: boolean,
): Promise<TaskModel[]> => {
  const params = new URLSearchParams();
  if (searchParam) params.append("search", searchParam);
  if (done !== undefined) params.append("done", done ? "true" : "false");

  const queryString = params.toString();
  const res = await AxiosQuery<TaskModel[]>(
    `/tasks${queryString ? `?${queryString}` : ""}`,
  );
  return res?.data;
};
