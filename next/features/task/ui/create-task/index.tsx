"use client";
import { DialogHeader } from "@/components/ui/dialog";
import { ModalWindows } from "@/shared/ui/modal-windows";
import { FormTask } from "../form-task";
import { CreateTaskDto } from "../../dto/create-task.dto";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useCreateTask } from "../../hooks/use-task-api";
import { useState } from "react";

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
    <ModalWindows
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
    </ModalWindows>
  );
};
