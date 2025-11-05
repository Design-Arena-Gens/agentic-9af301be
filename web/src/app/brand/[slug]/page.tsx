import { notFound } from "next/navigation";
import Link from "next/link";
import { pergolaBrands } from "@/data/brands";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = pergolaBrands.find((b) => b.slug === slug);
  if (!brand) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white px-4 pb-16 font-sans dark:from-black dark:to-zinc-950">
      <div className="mx-auto max-w-4xl py-10">
        <Link href="/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">? Back to comparison</Link>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brand.imageUrl} alt="" className="h-14 w-auto rounded border border-zinc-200 bg-white p-1 dark:border-zinc-800" />
            <a href={brand.website} target="_blank" rel="noreferrer" className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900">Visit website ?</a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-xs text-zinc-500">Starting price</p>
              <p className="mt-1 text-lg font-semibold">?{brand.startingPriceGBP.toLocaleString("en-GB")}</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-xs text-zinc-500">Warranty</p>
              <p className="mt-1 text-lg font-semibold">{brand.warrantyYears} years</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-xs text-zinc-500">Roof</p>
              <p className="mt-1 text-lg font-semibold">{brand.roofType}</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-xs text-zinc-500">Material</p>
              <p className="mt-1 text-lg font-semibold">{brand.frameMaterial}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Available sizes</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {brand.sizes.map((s) => (
                <span key={s} className="rounded-full bg-white px-3 py-1 text-xs ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-700">{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-zinc-600">
            {brand.freeDelivery && <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-900">Free delivery</span>}
            {brand.popular && <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-700 ring-1 ring-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:ring-indigo-900">Popular</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
