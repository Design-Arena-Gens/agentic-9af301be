"use client";

import Image from "next/image";
import Link from "next/link";
import { PergolaBrand } from "@/data/brands";

interface BrandCardProps {
  brand: PergolaBrand;
  selected: boolean;
  onToggleSelect: (id: string) => void;
}

export function BrandCard({ brand, selected, onToggleSelect }: BrandCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.imageUrl}
            alt={`${brand.name} logo`}
            className="h-12 w-auto rounded-md border border-zinc-200 bg-white object-contain p-1 dark:border-zinc-800"
          />
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              <Link href={`/brand/${brand.slug}`} className="hover:underline">
                {brand.name}
              </Link>
            </h3>
            <p className="text-xs text-zinc-500">From ?{brand.startingPriceGBP.toLocaleString("en-GB")}</p>
          </div>
        </div>
        <button
          onClick={() => onToggleSelect(brand.id)}
          className={`rounded-full px-3 py-1 text-sm font-medium ring-1 transition ${
            selected
              ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-white text-zinc-700 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-700"
          }`}
          aria-pressed={selected}
        >
          {selected ? "Selected" : "Compare"}
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-4">
        <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500">Roof</p>
          <p className="font-medium">{brand.roofType}</p>
        </div>
        <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500">Material</p>
          <p className="font-medium">{brand.frameMaterial}</p>
        </div>
        <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500">Warranty</p>
          <p className="font-medium">{brand.warrantyYears} yrs</p>
        </div>
        <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500">Rating</p>
          <p className="font-medium">{brand.rating.toFixed(1)} / 5</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        {brand.freeDelivery && (
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-900">Free delivery</span>
        )}
        {brand.popular && (
          <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-700 ring-1 ring-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:ring-indigo-900">Popular</span>
        )}
        <span className="rounded-full bg-zinc-50 px-2 py-1 text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">D2C</span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <a href={brand.website} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
          Visit website ?
        </a>
        <span className="text-xs text-zinc-500">Delivery: {brand.deliveryTime}</span>
      </div>
    </div>
  );
}
