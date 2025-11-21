import { getTasks } from "../api/task";
import { useQuery } from "@tanstack/react-query";
import { TaskModel } from "../model/task.model";

export const useGetTasks = (searchParam?: string, done?: boolean) => {
  
  return useQuery<TaskModel[]>({
    queryKey: ["tasks", searchParam, done],
    queryFn: async () => {
      console.log("queryFn executing...");
      const result = await getTasks(searchParam, done);
      console.log("queryFn result:", result);
      return result;
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

