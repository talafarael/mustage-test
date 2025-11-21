import { TaskModel } from "@/entites/task/model/task.model";

export interface UpdateTaskDto extends Partial<TaskModel> {
  taskId: string;
}
