"use client";
import { useUpdateTask } from "@/features/task/hooks/use-task-api";
import { Task } from "@/entities";
import { Checkbox } from "@/components/ui/checkbox";

export interface CompleteTaskProps {
  task: Task;
}
export const CompleteTask = ({ task }: CompleteTaskProps) => {
  const { mutate: updateTask } = useUpdateTask();

  const handlerChange = (state: boolean) => {
    updateTask({
      done: state,
      taskId: task.id,
    });
  };
  return <Checkbox checked={task.done} onCheckedChange={handlerChange} />;
};
