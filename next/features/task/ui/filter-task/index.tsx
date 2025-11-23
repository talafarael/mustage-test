import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export interface FilterTaskProps {
  onFilterChange: (done: boolean | undefined) => void;
}
export const FilterTask = ({ onFilterChange }: FilterTaskProps) => {
  const [filter, setFilter] = useState<string>("all");

  const handleFilterChange = (value: string) => {
    setFilter(value);
    const doneFilter =
      value === "all" ? undefined : value === "completed" ? true : false;
    onFilterChange(doneFilter);
  };
  return (
    <Select value={filter} onValueChange={handleFilterChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All tasks</SelectItem>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  );
};
