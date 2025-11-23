import { Task } from "@/entities";

export interface UpdateTaskDto extends Partial<Task> {
  taskId: string;
}
