"use client";

import { FilterTask } from "../filter-task";
import { SearchTask } from "../search-task";

export interface SearchAndFilterProps {
  onSearchChange: (search: string) => void;
  onFilterChange: (done: boolean | undefined) => void;
}

export const TaskFilterBar = ({
  onSearchChange,
  onFilterChange,
}: SearchAndFilterProps) => {
  return (
    <div className="flex m-[25px] flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto px-4">
      <SearchTask onSearchChange={onSearchChange} />
      <FilterTask onFilterChange={onFilterChange} />
    </div>
  );
};
