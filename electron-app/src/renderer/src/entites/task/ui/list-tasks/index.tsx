import { useState } from "react";
import { useGetTasks } from "../../hooks/use-task-api";
import { CardTask } from "../card-task";
import { SearchAndFilter } from "../search-and-filter";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const ListTasks = () => {
  const [search, setSearch] = useState<string>("");
  const [done, setDone] = useState<boolean | undefined>(undefined);
  const { data: tasks, isLoading, error } = useGetTasks(
    search || undefined,
    done
  );

  return (
    <div className="w-full">
      <div className="mb-6">
        <SearchAndFilter
          onSearchChange={setSearch}
          onFilterChange={setDone}
        />
      </div>

      {isLoading && (
        <div className="flex items-center justify-center mt-[24px]">
          <div className="flex flex-col items-center gap-4">
            <Spinner className="size-8 text-primary" />
            <p className="text-sm text-muted-foreground">Loading tasks...</p>
          </div>
        </div>
      )}

      {error && !isLoading && (
        <div className="flex items-center justify-center mt-[24px]">
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
                {error instanceof Error
                  ? error.message
                  : "Failed to load tasks. Please try again later."}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      )}

      {!isLoading && !error && (!tasks || tasks.length === 0) && (
        <div className="flex items-center justify-center mt-[24px]">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>No tasks found</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {search || done !== undefined
                  ? "No tasks match your search criteria."
                  : "Create your first task to get started!"}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      )}

      {!isLoading && !error && tasks && tasks.length > 0 && (
        <div className="flex gap-[16px] justify-center flex-wrap">
          {tasks.map((task) => (
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

