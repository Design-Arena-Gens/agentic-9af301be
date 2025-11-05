"use client";

import { SortKey } from "@/data/brands";

interface SortBarProps {
  sortKey: SortKey;
  asc: boolean;
  onChange: (key: SortKey, asc: boolean) => void;
}

export function SortBar({ sortKey, asc, onChange }: SortBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-xs text-zinc-500">Sort by</span>
      {(["price", "rating", "warranty"] as SortKey[]).map((key) => {
        const active = sortKey === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key, active ? !asc : asc)}
            className={`rounded-full px-3 py-1 ring-1 transition ${
              active
                ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-white text-zinc-700 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-200 dark:ring-zinc-700"
            }`}
          >
            {key === "price" ? "Price" : key === "rating" ? "Rating" : "Warranty"}
            {active && <span className="ml-1 opacity-70">{asc ? "?" : "?"}</span>}
          </button>
        );
      })}
    </div>
  );
}
