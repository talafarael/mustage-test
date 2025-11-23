"use client";

import { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormTask } from "../form-task";
import { CreateTaskDto } from "../../dto/create-task.dto";
import { useUpdateTask } from "../../hooks/use-task-api";
import { Task } from "@/entities";
import { ModalWindow } from "@/shared";

export interface UpdateTaskProps {
  task: Task;
}
export const UpdateTask = ({ task }: UpdateTaskProps) => {
  const [open, setOpen] = useState(false);
  const { mutate: updateTask, error, isPending } = useUpdateTask();
  const handlerSubmit = (data: CreateTaskDto) => {
    updateTask(
      {
        ...data,
        taskId: task.id,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };
  const mockData: CreateTaskDto = {
    title: task.title,
    description: task?.description ?? undefined,
  };
  return (
    <ModalWindow
      textOpenWindow="Update task"
      open={open}
      onOpenChange={setOpen}
    >
      <DialogHeader>
        <DialogTitle>Update task</DialogTitle>
      </DialogHeader>
      <FormTask
        error={error?.message}
        isLoading={isPending}
        mockData={mockData}
        handlerSubmit={handlerSubmit}
      />
    </ModalWindow>
  );
};
