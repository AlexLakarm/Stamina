"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CategoryFiltersProps {
  categories: string[];
  currentCategory?: string;
}

export function CategoryFilters({ categories, currentCategory }: CategoryFiltersProps) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={currentCategory === category ? "default" : "outline"}
          className={cn(
            "cursor-pointer px-4 py-2 text-sm transition-colors",
            currentCategory === category 
              ? "bg-blue-500 hover:bg-blue-600" 
              : "hover:bg-neutral-800 border-neutral-700"
          )}
          onClick={() => {
            if (category === "Toutes catégories") {
              router.push("/actualites");
            } else {
              router.push(`/actualites?category=${category}`);
            }
          }}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
} 