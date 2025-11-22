export interface TaskModel {
  id: string;
  title: string;
  description?: string | null;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}
