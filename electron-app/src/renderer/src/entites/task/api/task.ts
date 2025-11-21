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
  const url = `/tasks${queryString ? `?${queryString}` : ""}`;

  
  try {
    const res = await AxiosQuery<TaskModel[]>(url);
    console.log("getTasks response:", res);
    return res?.data;
  } catch (error) {
    console.error("getTasks error:", error);
    throw error;
  }
};

