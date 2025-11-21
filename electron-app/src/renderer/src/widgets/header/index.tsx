import { CreateTask } from "@/features/task/ui/create-task";

export const Header = () => {
  return (
    <header className="sticky h-[64px] top-0 h-[32px] w-full border-b bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="text-lg font-bold">M</span>
        </div>
        <span className="text-xl font-semibold tracking-tight">Mustage</span>
      </div>

      <CreateTask />
    </header>
  );
};

