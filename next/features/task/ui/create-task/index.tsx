"use client";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormTask } from "../form-task";
import { CreateTaskDto } from "../../dto/create-task.dto";
import { useCreateTask } from "../../hooks/use-task-api";
import { useState } from "react";
import { ModalWindow } from "@/shared";

export const CreateTask = () => {
  const [open, setOpen] = useState(false);
  const { mutate: createTask, error, isPending } = useCreateTask();
  const handlerSubmit = (data: CreateTaskDto) => {
    createTask(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };
  return (
    <ModalWindow
      textOpenWindow="Create task"
      open={open}
      onOpenChange={setOpen}
    >
      <DialogHeader>
        <DialogTitle>Create task</DialogTitle>
      </DialogHeader>
      <FormTask
        error={error?.message}
        isLoading={isPending}
        handlerSubmit={handlerSubmit}
      />
    </ModalWindow>
  );
};
