"use client";
import { CardTask } from "../card-task";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Task } from "../../models";

export interface ListTasksProps {
  tasks?: Task[];
  error?: string;
  isLoading: boolean;
}
export const ListTasks = ({ tasks, error, isLoading }: ListTasksProps) => {
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center mt-[24px]">
          <div className="flex flex-col items-center gap-4">
            <Spinner className="size-8 text-primary" />
            <p className="text-sm text-muted-foreground">Loading tasks...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error && !isLoading) {
    return (
      <div className="w-full h-full flex justify-center">
        <Card className="max-w-md border-destructive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-destructive">
                Error loading tasks
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-destructive">
              {error ?? "Failed to load tasks. Please try again later."}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className="flex w-full h-full gap-[16px] justify-center flex-wrap">
      {tasks?.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </div>
  );
};
