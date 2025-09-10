"use client";

import Image from "next/image";
import LangToggle from "../../components/LangToggle";
import { useI18n } from "../../components/LanguageProvider";

type Product = {
  slug: string;
  name: string;
  price: string;
  tag: string;
  category: "bottoms" | "tops" | "outer" | "accessories" | "shoes";
  img: string;
};

const ALL: Product[] = [
  { slug: "denim-dark",  name: "데님 – 다크 인디고", price: "₩59,000", tag: "Fit 165", category: "bottoms", img: "/products/denim-dark/01.jpg" },
  { slug: "denim-black", name: "데님 – 블랙",        price: "₩59,000", tag: "Fit 170", category: "bottoms", img: "/products/denim-black/01.jpg" },
  { slug: "jacket-crop-black", name: "크롭 자켓 – 블랙", price: "₩79,000", tag: "NEW", category: "outer", img: "/products/jacket-crop-black/01.jpg" },
  { slug: "tee-basic-white", name: "베이직 티셔츠 – 화이트", price: "₩19,000", tag: "TOP", category: "tops", img: "/products/tee-basic-white/01.jpg" },
  { slug: "cap-minimals", name: "미니멀즈 캡", price: "₩29,000", tag: "ACC", category: "accessories", img: "/products/cap-minimals/01.jpg" },
  { slug: "loafers-black", name: "로퍼 – 블랙", price: "₩89,000", tag: "SHOES", category: "shoes", img: "/products/loafers-black/01.jpg" },
];

const CATEGORIES: { key: Product["category"]; label: string }[] = [
  { key: "bottoms", label: "Bottoms" },
  { key: "tops", label: "Tops" },
  { key: "outer", label: "Outer" },
  { key: "accessories", label: "Accessories" },
  { key: "shoes", label: "Shoes" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { cat?: string; fit?: string; sort?: string };
}) {
  const { t } = useI18n();

  const cat = (searchParams?.cat || "").toLowerCase();
  const fit = searchParams?.fit || "";

  let list = ALL.slice();

  if (cat && ["bottoms", "tops", "outer", "accessories", "shoes"].includes(cat)) {
    list = list.filter((p) => p.category === cat);
  }
  if (fit) {
    list = list.filter((p) => (p.tag || "").toLowerCase().includes(fit.toLowerCase()));
  }
  if (searchParams?.sort === "best") {
    const bestOrder = ["denim-dark", "denim-black"];
    list.sort((a, b) => bestOrder.indexOf(a.slug) - bestOrder.indexOf(b.slug));
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HEADER (간단) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-[18px]">MINIMALS</a>
          <nav className="flex items-center gap-2 text-sm">
            <a href="/products" className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">{t("nav_products")}</a>
            <a href="/#size" className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">{t("nav_size")}</a>
            <a href="https://smartstore.naver.com/내상점" className="px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90">{t("nav_buy")}</a>
            <LangToggle />
          </nav>
        </div>

        {/* 카테고리 바(영문 고정) */}
        <div className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 h-12 flex items-center gap-2 overflow-x-auto no-scrollbar text-sm">
            {CATEGORIES.map((c) => (
              <a
                key={c.key}
                href={`/products?cat=${c.key}`}
                className={`px-3 py-1.5 rounded-lg border whitespace-nowrap hover:bg-neutral-50 ${
                  cat === c.key ? "border-black" : "border-neutral-200"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* LIST */}
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-14">
        <h1 className="text-xl md:text-3xl font-extrabold">
          {t("products_title_all")}
          {cat ? ` · ${cat.toUpperCase()}` : ""}{fit ? ` · ${fit}` : ""}
        </h1>

        {(cat || fit) && (
          <div className="mt-3 text-sm">
            <a href="/products" className="underline underline-offset-4">{t("products_filter_reset")}</a>
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {list.map((p) => (
            <a key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-sm">
              <div className="aspect-[4/5] relative bg-neutral-100">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                <div className="font-semibold text-[15px]">{p.name}</div>
                <div className="text-[13px] text-neutral-700">{p.price}</div>
              </div>
            </a>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-8 text-sm text-neutral-500">{t("products_none")}</p>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} MINIMALS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
