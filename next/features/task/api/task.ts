import { Task } from "@/entities";
import { CreateTaskDto } from "@/features/task/dto/create-task.dto";
import { UpdateTaskDto } from "@/features/task/dto/update-task.dto";
import { AxiosMutation } from "@/shared";

export const createTask = async (data: CreateTaskDto): Promise<Task> => {
  const res = await AxiosMutation<CreateTaskDto, Task>({
    path: "/tasks",
    data,
  });
  return res?.data;
};
export const updateTask = async (data: UpdateTaskDto): Promise<Task> => {
  const { taskId, ...body } = data;
  const res = await AxiosMutation<Partial<Task>, Task>({
    path: `/tasks/${taskId}`,
    data: body,
    method: "patch",
  });
  return res?.data;
};
export const deleteTask = async (taskId: string): Promise<Task> => {
  const res = await AxiosMutation<string, Task>({
    path: `/tasks/${taskId}`,
    method: "delete",
  });
  return res?.data;
};
