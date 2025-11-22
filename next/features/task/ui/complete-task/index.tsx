"use client";
import { SharedCheckbox } from "@/shared/ui/checkbox";
import { TaskModel } from "../../model/task.model";
import { useUpdateTask } from "@/features/task/hooks/use-task-api";

export interface CheckboxTaskProps {
  task: TaskModel;
}
export const CheckboxTask = ({ task }: CheckboxTaskProps) => {
  const { mutate: updateTask } = useUpdateTask();

  const handlerChange = (state: boolean) => {
    updateTask({
      done: state,
      taskId: task.id,
    });
  };
  return <SharedCheckbox checked={task.done} onChange={handlerChange} />;
};
