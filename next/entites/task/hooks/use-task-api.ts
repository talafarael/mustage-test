"use client";
import { getTasks } from "../api/task";
import { useQuery } from "@tanstack/react-query";
import { TaskModel } from "../model/task.model";

export const useGetTasks = (searchParam?: string, done?: boolean) => {
  return useQuery<TaskModel[]>({
    queryKey: ["tasks", searchParam, done],
    queryFn: () => getTasks(searchParam, done),
  });
};
