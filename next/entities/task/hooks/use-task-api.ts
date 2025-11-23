"use client";
import { getTasks } from "../api/task";
import { useQuery } from "@tanstack/react-query";
import { Task } from "../models";

export const useGetTasks = (searchParam?: string, done?: boolean) => {
  return useQuery<Task[]>({
    queryKey: ["tasks", searchParam, done],
    queryFn: () => getTasks(searchParam, done),
  });
};
