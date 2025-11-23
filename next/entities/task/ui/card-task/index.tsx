import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UpdateTask } from "@/features/task/ui/update-task";
import { DeleteTask } from "@/features/task/ui/delete-task";
import { CompleteTask } from "@/features/task/ui/complete-task";
import { Task } from "../../models";

export interface CardTaskProps {
  task: Task;
}
export const CardTask = ({ task }: CardTaskProps) => {
  return (
    <Card className={task.done ? "opacity-75" : ""}>
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <CardTitle
          className={`flex-1 leading-tight ${
            task.done ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.title}
        </CardTitle>
        <div className="mt-1 flex-shrink-0">
          <CompleteTask task={task} />
        </div>
      </CardHeader>
      {task.description && (
        <CardContent>
          <CardDescription
            className={task.done ? "line-through text-muted-foreground" : ""}
          >
            {task.description}
          </CardDescription>
        </CardContent>
      )}
      <CardFooter className="gap-2">
        <UpdateTask task={task} />
        <DeleteTask taskId={task.id} />
      </CardFooter>
    </Card>
  );
};
