"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SearchAndFilterProps {
  onSearchChange: (search: string) => void;
  onFilterChange: (done: boolean | undefined) => void;
}

export const SearchAndFilter = ({
  onSearchChange,
  onFilterChange,
}: SearchAndFilterProps) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    const doneFilter =
      value === "all" ? undefined : value === "completed" ? true : false;
    onFilterChange(doneFilter);
  };

  return (
    <div className="flex mt-[25px] flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto px-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          type="search"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
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
    </div>
  );
};
