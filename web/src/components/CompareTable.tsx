"use client";

import { PergolaBrand } from "@/data/brands";

interface CompareTableProps {
  brands: PergolaBrand[];
  onRemove: (id: string) => void;
}

export function CompareTable({ brands, onRemove }: CompareTableProps) {
  if (brands.length === 0) return null;
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
        <h3 className="text-base font-semibold">Comparison</h3>
        <span className="text-xs text-zinc-500">{brands.length} selected</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-zinc-50 text-left dark:bg-zinc-800">
              <th className="px-4 py-3 font-medium">Brand</th>
              <th className="px-4 py-3 font-medium">From Price</th>
              <th className="px-4 py-3 font-medium">Roof</th>
              <th className="px-4 py-3 font-medium">Material</th>
              <th className="px-4 py-3 font-medium">Warranty</th>
              <th className="px-4 py-3 font-medium">Delivery</th>
              <th className="px-4 py-3 font-medium">Rating</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {brands.map((b) => (
              <tr key={b.id} className="border-t border-zinc-100 dark:border-zinc-800">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.imageUrl} alt="" className="h-8 w-14 rounded border border-zinc-200 object-contain p-1 dark:border-zinc-700" />
                    <span className="font-medium">{b.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">?{b.startingPriceGBP.toLocaleString("en-GB")}</td>
                <td className="px-4 py-3">{b.roofType}</td>
                <td className="px-4 py-3">{b.frameMaterial}</td>
                <td className="px-4 py-3">{b.warrantyYears} yrs</td>
                <td className="px-4 py-3">{b.deliveryTime}</td>
                <td className="px-4 py-3">{b.rating.toFixed(1)}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => onRemove(b.id)} className="rounded-full px-3 py-1 text-xs text-zinc-700 ring-1 ring-zinc-300 hover:bg-zinc-50 dark:text-zinc-200 dark:ring-zinc-700">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
