"use client";

import { FrameMaterial, RoofType } from "@/data/brands";

export interface FiltersStateUI {
  q: string;
  maxPrice?: number;
  roofTypes: RoofType[];
  materials: FrameMaterial[];
  freeDeliveryOnly: boolean;
  onChange: (state: Omit<FiltersStateUI, "onChange">) => void;
}

const ROOF_OPTIONS: RoofType[] = [
  "Louvered",
  "Fixed Polycarbonate",
  "Retractable Fabric",
  "Louvered + Screens",
];

const MATERIAL_OPTIONS: FrameMaterial[] = ["Aluminium", "Steel", "Wood"];

export function Filters({ q, maxPrice, roofTypes, materials, freeDeliveryOnly, onChange }: FiltersStateUI) {
  return (
    <div className="sticky top-4 z-10 rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1">
          <label className="block text-xs text-zinc-500">Search</label>
          <input
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            placeholder="Brand, size, roof..."
            value={q}
            onChange={(e) => onChange({ q: e.target.value, maxPrice, roofTypes, materials, freeDeliveryOnly })}
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-500">Max price (?)</label>
          <input
            type="number"
            min={0}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            value={maxPrice ?? ""}
            onChange={(e) => onChange({ q, maxPrice: e.target.value ? Number(e.target.value) : undefined, roofTypes, materials, freeDeliveryOnly })}
            placeholder="e.g. 2000"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-500">Roof type</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {ROOF_OPTIONS.map((opt) => {
              const active = roofTypes.includes(opt);
              return (
                <button
                  key={opt}
                  onClick={() => {
                    const next = active ? roofTypes.filter((r) => r !== opt) : [...roofTypes, opt];
                    onChange({ q, maxPrice, roofTypes: next, materials, freeDeliveryOnly });
                  }}
                  className={`rounded-full px-3 py-1 text-xs ring-1 transition ${
                    active
                      ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-white text-zinc-700 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-200 dark:ring-zinc-700"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs text-zinc-500">Material</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {MATERIAL_OPTIONS.map((opt) => {
              const active = materials.includes(opt);
              return (
                <button
                  key={opt}
                  onClick={() => {
                    const next = active ? materials.filter((m) => m !== opt) : [...materials, opt];
                    onChange({ q, maxPrice, roofTypes, materials: next, freeDeliveryOnly });
                  }}
                  className={`rounded-full px-3 py-1 text-xs ring-1 transition ${
                    active
                      ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-white text-zinc-700 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-200 dark:ring-zinc-700"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2 lg:col-span-4">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={freeDeliveryOnly}
              onChange={(e) => onChange({ q, maxPrice, roofTypes, materials, freeDeliveryOnly: e.target.checked })}
              className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
            Free delivery only
          </label>
        </div>
      </div>
    </div>
  );
}
