import { TaskModel } from "@/entites/task/model/task.model";
import { CreateTaskDto } from "@/features/task/dto/create-task.dto";
import { UpdateTaskDto } from "@/features/task/dto/update-task.dto";
import { AxiosMutation } from "@/shared/api/axios";

export const createTask = async (data: CreateTaskDto): Promise<TaskModel> => {
  const res = await AxiosMutation<CreateTaskDto, TaskModel>({
    path: "/tasks",
    data,
  });
  return res?.data;
};
export const updateTask = async (data: UpdateTaskDto): Promise<TaskModel> => {
  const { taskId, ...body } = data;
  const res = await AxiosMutation<Partial<TaskModel>, TaskModel>({
    path: `/tasks/${taskId}`,
    data: body,
    method: "patch",
  });
  return res?.data;
};
export const deleteTask = async (taskId: string): Promise<TaskModel> => {
  const res = await AxiosMutation<string, TaskModel>({
    path: `/tasks/${taskId}`,
    method: "delete",
  });
  return res?.data;
};
