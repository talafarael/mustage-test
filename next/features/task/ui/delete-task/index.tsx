"use client";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ModalWindow } from "@/shared/ui/modal-window";
import { useState } from "react";
import { useDeleteTask } from "../../hooks/use-task-api";
import { Button } from "@/components/ui/button";

export interface DeleteTaskProps {
  taskId: string;
}
export const DeleteTask = ({ taskId }: DeleteTaskProps) => {
  const [open, setOpen] = useState(false);
  const { mutate: deleteTask, isPending, error } = useDeleteTask();
  const handleDeleteTask = () => {
    deleteTask(taskId, {
      onSuccess: () => setOpen(false),
    });
  };
  const handleCloseWindow = () => {
    setOpen(false);
  };
  return (
    <ModalWindow
      textOpenWindow="Delete task"
      open={open}
      onOpenChange={setOpen}
    >
      <DialogHeader>
        <DialogTitle>Delete task</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this task? This action cannot be
          undone.
        </DialogDescription>
      </DialogHeader>
      {error && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {error.message || "Failed to delete task. Please try again."}
        </div>
      )}
      <DialogFooter>
        <Button
          variant="outline"
          onClick={handleCloseWindow}
          disabled={isPending}
        >
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={handleDeleteTask}
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </DialogFooter>
    </ModalWindow>
  );
};
