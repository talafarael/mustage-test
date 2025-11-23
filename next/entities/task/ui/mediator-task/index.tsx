"use client";
import { useState } from "react";
import { useGetTasks } from "../../hooks/use-task-api";
import { ListTasks } from "../list-tasks";
import { TaskFilterBar } from "@/features";

export const MediatorTask = () => {
  const [search, setSearch] = useState<string>("");
  const [done, setDone] = useState<boolean | undefined>(undefined);
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasks(search || undefined, done);

  return (
    <div className="h-[100%]">
      <TaskFilterBar onSearchChange={setSearch} onFilterChange={setDone} />
      <ListTasks tasks={tasks} isLoading={isLoading} error={error?.message} />
    </div>
  );
};
