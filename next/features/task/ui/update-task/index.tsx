"use client";

import { useState } from "react";
import { TaskModel } from "@/entites/task/model/task.model";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ModalWindows } from "@/shared/ui/modal-windows";
import { FormTask } from "../form-task";
import { CreateTaskDto } from "../../dto/create-task.dto";
import { useUpdateTask } from "../../hooks/use-task-api";

export interface UpdateTaskProps {
  task: TaskModel;
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
      }
    );
  };
  const mockData: CreateTaskDto = {
    title: task.title,
    description: task?.description ?? undefined,
  };
  return (
    <ModalWindows
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
    </ModalWindows>
  );
};
