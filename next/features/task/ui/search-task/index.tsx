"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
export interface SearchTaskProps {
  onSearchChange: (search: string) => void;
}
export const SearchTask = ({ onSearchChange }: SearchTaskProps) => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, onSearchChange]);

  return (
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
  );
};
