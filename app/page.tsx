"use client";

import ProductSlider from "../components/ProductSlider";
import Image from "next/image";
import LangToggle from "../components/LangToggle";
import { useI18n } from "../components/LanguageProvider";

type Product = {
  slug: string;
  name: string;
  price: string;
  tag: string;
  category: "bottoms" | "tops" | "outer" | "accessories" | "shoes";
  isBest?: boolean;
  colors?: { name: string; hex: string }[];
  images: { src: string; alt?: string }[];
};

const PRODUCTS: Product[] = [
  {
    slug: "denim-dark",
    name: "데님 – 다크 인디고",
    price: "₩59,000",
    tag: "Fit 165",
    category: "bottoms",
    isBest: true,
    colors: [
      { name: "Indigo", hex: "#1d2733" },
      { name: "Navy", hex: "#0a2540" },
    ],
    images: [
      { src: "/products/denim-dark/01.jpg", alt: "다크 인디고 전면" },
      { src: "/products/denim-dark/02.jpg", alt: "다크 인디고 측면" },
    ],
  },
  {
    slug: "denim-black",
    name: "데님 – 블랙",
    price: "₩59,000",
    tag: "Fit 170",
    category: "bottoms",
    isBest: true,
    colors: [
      { name: "Black",  hex: "#111111" },
      { name: "Charcoal", hex: "#2b2b2b" },
      { name: "Faded", hex: "#5a5a5a" },
    ],
    images: [
      { src: "/products/denim-black/01.jpg", alt: "블랙 데님 전면" },
      { src: "/products/denim-black/02.jpg", alt: "블랙 데님 측면" },
    ],
  },
  {
    slug: "jacket-crop-black",
    name: "크롭 자켓 – 블랙",
    price: "₩79,000",
    tag: "NEW",
    category: "outer",
    images: [
      { src: "/products/jacket-crop-black/01.jpg", alt: "크롭 자켓 전면" },
      { src: "/products/jacket-crop-black/02.jpg", alt: "크롭 자켓 측면" },
    ],
  },
];

const CATEGORIES: { key: Product["category"]; label: string }[] = [
  { key: "bottoms", label: "Bottoms" },
  { key: "tops", label: "Tops" },
  { key: "outer", label: "Outer" },
  { key: "accessories", label: "Accessories" },
  { key: "shoes", label: "Shoes" },
];

function MobileRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-4 px-4 overflow-x-auto no-scrollbar flex gap-4 md:grid md:grid-cols-3 md:gap-6">
      {children}
    </div>
  );
}

export default function Home() {
  const { t } = useI18n(); // 이제 정상 작동

  const heroSlides = [
    { src: "/hero.jpg", alt: "메인 히어로 1" },
    { src: "/before.jpg", alt: "핏 비교 - 전" },
    { src: "/after.jpg", alt: "핏 비교 - 후" },
  ];

  const bestProducts = PRODUCTS.filter((p) => p.isBest);
  const newProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-[18px]">MINIMALS</a>
          <nav className="flex items-center gap-2 text-sm">
            <a href="/products" className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">
              {t("nav_products")}
            </a>
            <a href="#size" className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">
              {t("nav_size")}
            </a>
            <a href="https://smartstore.naver.com/내상점" className="px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90">
              {t("nav_buy")}
            </a>
            <LangToggle />
          </nav>
        </div>

        {/* 카테고리(영어 고정) */}
        <div className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 h-12 flex items-center gap-2 overflow-x-auto no-scrollbar text-sm">
            {CATEGORIES.map((c) => (
              <a
                key={c.key}
                href={`/products?cat=${c.key}`}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 whitespace-nowrap hover:bg-neutral-50"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] tracking-widest text-neutral-500 font-medium">{t("hero_kicker")}</p>
            <h1 className="mt-2 text-[26px] leading-[1.2] font-extrabold md:text-5xl">
              {t("hero_title")}
            </h1>
            <p className="mt-3 text-[14px] text-neutral-600 md:text-base">{t("hero_desc")}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href="/products" className="rounded-2xl bg-black text-white px-5 py-3 text-base font-semibold text-center hover:opacity-90">
                {t("hero_btn_products")}
              </a>
              <a href="#size" className="rounded-2xl border border-neutral-300 px-5 py-3 text-base font-semibold text-center hover:bg-neutral-50">
                {t("hero_btn_size")}
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm">
            <ProductSlider slides={heroSlides} />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="fit" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <h2 className="text-xl font-extrabold md:text-3xl">{t("sec_why")}</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { t: t("feat_1_t"), d: t("feat_1_d") },
              { t: t("feat_2_t"), d: t("feat_2_d") },
              { t: t("feat_3_t"), d: t("feat_3_d") },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-[11px] text-neutral-500">FEATURE {i + 1}</div>
                <div className="mt-1 text-[16px] font-bold">{f.t}</div>
                <p className="mt-2 text-[13px] text-neutral-600">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST */}
      <section id="best" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold md:text-3xl">{t("sec_best")}</h2>
            <a href="/products?sort=best" className="text-sm underline underline-offset-4 hidden sm:inline-block">
              {t("btn_view_all")}
            </a>
          </div>

          {/* 모바일 캐러셀 */}
          <div className="mt-5 md:hidden">
            <MobileRow>
              {bestProducts.map((p) => (
                <a key={p.slug} href={`/products/${p.slug}`} className="min-w-[75%] rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="relative">
                    <ProductSlider slides={p.images} showArrows={false} />
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                    <div className="mt-0.5 font-semibold leading-tight text-[15px]">{p.name}</div>
                    <div className="mt-1 text-[13px] text-neutral-700">{p.price}</div>
                    <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">
                      {t("card_view")}
                    </div>
                  </div>
                </a>
              ))}
            </MobileRow>
          </div>

          {/* 데스크탑 그리드 */}
          <div className="mt-6 hidden md:grid md:grid-cols-3 gap-6">
            {bestProducts.map((p) => (
              <a key={p.slug} href={`/products/${p.slug}`} className="group rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow active:scale-[0.99]">
                <div className="relative">
                  <ProductSlider slides={p.images} showArrows />
                </div>
                <div className="p-4">
                  <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                  <div className="mt-0.5 font-semibold leading-tight text-[15px]">{p.name}</div>
                  <div className="mt-1 text-[13px] text-neutral-700">{p.price}</div>
                  <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">
                    {t("card_view")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEW */}
      <section id="products" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold md:text-3xl">{t("sec_new")}</h2>
            <a href="/products" className="text-sm underline underline-offset-4 hidden sm:inline-block">
              {t("btn_view_all")}
            </a>
          </div>

          <div className="mt-5 md:hidden">
            <MobileRow>
              {newProducts.map((p) => (
                <a key={p.slug} href={`/products/${p.slug}`} className="min-w-[75%] rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="relative">
                    <ProductSlider slides={p.images} showArrows={false} />
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                    <div className="mt-0.5 font-semibold leading-tight text-[15px]">{p.name}</div>
                    <div className="mt-1 text-[13px] text-neutral-700">{p.price}</div>
                    <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">
                      {t("card_view")}
                    </div>
                  </div>
                </a>
              ))}
            </MobileRow>
          </div>

          <div className="mt-6 hidden md:grid md:grid-cols-3 gap-6">
            {newProducts.map((p) => (
              <a key={p.slug} href={`/products/${p.slug}`} className="group rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow active:scale-[0.99]">
                <div className="relative">
                  <ProductSlider slides={p.images} showArrows />
                </div>
                <div className="p-4">
                  <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                  <div className="mt-0.5 font-semibold leading-tight text-[15px]">{p.name}</div>
                  <div className="mt-1 text-[13px] text-neutral-700">{p.price}</div>
                  <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">
                    {t("card_view")}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a href="/products" className="sm:hidden mt-4 inline-flex justify-center w-full rounded-xl border border-neutral-300 py-3 text-[15px] font-semibold">
            {t("btn_view_all")}
          </a>
        </div>
      </section>

      {/* SIZE GUIDE (홈 간단) */}
      <section id="size" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <h2 className="text-xl md:text-3xl font-extrabold">{t("sec_size")}</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { t: "Fit 160", d: "총장 95cm · 허리 29~31\" · 밑위 26cm" },
              { t: "Fit 165", d: "총장 98cm · 허리 30~32\" · 밑위 27cm" },
              { t: "Fit 170", d: "총장 101cm · 허리 31~33\" · 밑위 28cm" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-[11px] text-neutral-500">RECOMMENDED</div>
                <div className="mt-0.5 font-bold text-[16px]">{s.t}</div>
                <p className="mt-2 text-[13px] text-neutral-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE TABS */}
      <nav className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-neutral-200 md:hidden">
        <div className="mx-auto max-w-6xl px-3">
          <div className="grid grid-cols-4 text-center text-[12px]">
            <a href="#top" className="py-3 font-semibold">Home</a>
            <a href="/products" className="py-3">Products</a>
            <a href="#size" className="py-3">{t("nav_size")}</a>
            <a href="https://smartstore.naver.com/내상점" className="py-3 font-semibold text-white bg-black rounded-xl mx-2">
              {t("nav_buy")}
            </a>
          </div>
        </div>
      </nav>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-10 text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>© {new Date().getFullYear()} MINIMALS. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="/terms" className="hover:opacity-70">이용약관</a>
              <a href="/privacy" className="hover:opacity-70">개인정보처리방침</a>
              <a href="/support" className="hover:opacity-70">고객센터</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
