"use client";

import { useMemo, useState } from "react";
import { pergolaBrands, filterBrands, sortBrands } from "@/data/brands";
import { Filters } from "@/components/Filters";
import { BrandCard } from "@/components/BrandCard";
import { CompareTable } from "@/components/CompareTable";
import { SortBar } from "@/components/SortBar";

export default function Home() {
  const [q, setQ] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [roofTypes, setRoofTypes] = useState<any[]>([]);
  const [materials, setMaterials] = useState<any[]>([]);
  const [freeDeliveryOnly, setFreeDeliveryOnly] = useState(false);
  const [sortKey, setSortKey] = useState<"price" | "rating" | "warranty">("price");
  const [asc, setAsc] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const f = filterBrands(pergolaBrands, { q, maxPrice, roofTypes: roofTypes as any, materials: materials as any, freeDeliveryOnly });
    return sortBrands(f, sortKey, asc);
  }, [q, maxPrice, roofTypes, materials, freeDeliveryOnly, sortKey, asc]);

  const selected = pergolaBrands.filter((b) => selectedIds.includes(b.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white px-4 pb-16 font-sans dark:from-black dark:to-zinc-950">
      <header className="mx-auto max-w-6xl py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">PergolaCompare UK</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Minimal, modern comparison of UK pergola D2C brands.</p>
          </div>
          <SortBar sortKey={sortKey} asc={asc} onChange={(k, a) => { setSortKey(k); setAsc(a); }} />
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
        <aside>
          <Filters
            q={q}
            maxPrice={maxPrice}
            roofTypes={roofTypes as any}
            materials={materials as any}
            freeDeliveryOnly={freeDeliveryOnly}
            onChange={({ q, maxPrice, roofTypes, materials, freeDeliveryOnly }) => {
              setQ(q);
              setMaxPrice(maxPrice);
              setRoofTypes(roofTypes);
              setMaterials(materials);
              setFreeDeliveryOnly(freeDeliveryOnly);
            }}
          />
        </aside>
        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) => (
              <BrandCard
                key={b.id}
                brand={b}
                selected={selectedIds.includes(b.id)}
                onToggleSelect={(id) =>
                  setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
                }
              />
            ))}
          </div>

          <CompareTable
            brands={selected}
            onRemove={(id) => setSelectedIds((prev) => prev.filter((x) => x !== id))}
          />
        </section>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl text-xs text-zinc-500">
        <p>Prices are indicative starting prices in GBP. Always check the brand website for current pricing.</p>
      </footer>
    </div>
  );
}
