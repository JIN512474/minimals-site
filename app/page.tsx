// app/page.tsx
import ProductSlider from "../components/ProductSlider";
import Image from "next/image";

type Product = {
  slug: string;
  name: string;
  price: string;
  tag: string;
  category: "bottoms" | "tops" | "outer" | "accessories" | "shoes";
  isBest?: boolean;
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
  // 예시용 더미 (필요하면 실제 이미지 추가)
  {
    slug: "tee-basic-white",
    name: "베이직 티셔츠 – 화이트",
    price: "₩19,000",
    tag: "TOP",
    category: "tops",
    images: [
      { src: "/products/tee-basic-white/01.jpg", alt: "화이트 티 전면" },
      { src: "/products/tee-basic-white/02.jpg", alt: "화이트 티 측면" },
    ],
  },
  {
    slug: "cap-minimals",
    name: "미니멀즈 캡",
    price: "₩29,000",
    tag: "ACC",
    category: "accessories",
    images: [
      { src: "/products/cap-minimals/01.jpg", alt: "캡 전면" },
      { src: "/products/cap-minimals/02.jpg", alt: "캡 측면" },
    ],
  },
  {
    slug: "loafers-black",
    name: "로퍼 – 블랙",
    price: "₩89,000",
    tag: "SHOES",
    category: "shoes",
    images: [
      { src: "/products/loafers-black/01.jpg", alt: "로퍼 전면" },
      { src: "/products/loafers-black/02.jpg", alt: "로퍼 측면" },
    ],
  },
];

const CATEGORIES: { key: Product["category"]; label: string }[] = [
  { key: "bottoms", label: "하의" },
  { key: "tops", label: "상의" },
  { key: "outer", label: "아우터" },
  { key: "accessories", label: "악세사리" },
  { key: "shoes", label: "신발" },
];

function MobileRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-4 px-4 overflow-x-auto no-scrollbar flex gap-4 md:grid md:grid-cols-3 md:gap-6">
      {children}
    </div>
  );
}

export default function Home() {
  const heroSlides = [
    { src: "/hero.jpg", alt: "메인 히어로 1" },
    { src: "/before.jpg", alt: "핏 비교 - 전" },
    { src: "/after.jpg", alt: "핏 비교 - 후" },
  ];

  const bestProducts = PRODUCTS.filter((p) => p.isBest);
  const newProducts = PRODUCTS.slice(0, 3); // 예시: 최근 3개

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-[18px]">MINIMALS</a>
          <nav className="flex items-center gap-2 text-sm">
            <a href="/products" className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">상품</a>
            <a href="#size" className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">사이즈</a>
            <a href="https://smartstore.naver.com/내상점" className="px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90">구매</a>
          </nav>
        </div>

        {/* ✅ 카테고리 상단바 */}
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

      {/* HERO (슬라이더) */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] tracking-widest text-neutral-500 font-medium">SMALL FRAME, BIG STYLE</p>
            <h1 className="mt-2 text-[26px] leading-[1.2] font-extrabold md:text-5xl">
              비율이 완성되는 <span className="underline decoration-neutral-300">미니멀즈핏</span>
            </h1>
            <p className="mt-3 text-[14px] text-neutral-600 md:text-base">
              160~170cm 남성을 위해 총장/밑위/밑단을 다시 설계. 수선 없이 바로 입는 완벽 비율.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href="/products" className="rounded-2xl bg-black text-white px-5 py-3 text-base font-semibold text-center hover:opacity-90">상품 보기</a>
              <a href="#size" className="rounded-2xl border border-neutral-300 px-5 py-3 text-base font-semibold text-center hover:bg-neutral-50">사이즈</a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-neutral-500">
              <span className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-black" /> 160·165·170 전용</span>
              <span className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-black" /> 수선 없이 착용</span>
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
          <h2 className="text-xl font-extrabold md:text-3xl">왜 미니멀즈핏인가요?</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "전용 기장 설계", desc: "160·165·170 총장으로 비율 최적화." },
              { title: "밑위/허벅지 최적화", desc: "앉아도 편안, 서면 더 길게." },
              { title: "미니멀 워싱", desc: "어떤 코디에도 어울리는 컬러." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-[11px] text-neutral-500">FEATURE {i + 1}</div>
                <div className="mt-1 text-[16px] font-bold">{f.title}</div>
                <p className="mt-2 text-[13px] text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ BEST PRODUCTS */}
      <section id="best" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold md:text-3xl">베스트</h2>
            <a href="/products?sort=best" className="text-sm underline underline-offset-4 hidden sm:inline-block">더 보기</a>
          </div>

          {/* 모바일 가로 스크롤 */}
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
                    <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">자세히 보기</div>
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
                  <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">자세히 보기</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEW PRODUCTS (기존 “신상품”) */}
      <section id="products" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold md:text-3xl">신상품</h2>
            <a href="/products" className="text-sm underline underline-offset-4 hidden sm:inline-block">전체 보기</a>
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
                    <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">자세히 보기</div>
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
                  <div className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold text-center">자세히 보기</div>
                </div>
              </a>
            ))}
          </div>

          <a href="/products" className="sm:hidden mt-4 inline-flex justify-center w-full rounded-xl border border-neutral-300 py-3 text-[15px] font-semibold">전체 상품 보기</a>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14 grid gap-6 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 md:aspect-[16/6]">
            <Image src="/after.jpg" alt="미니멀즈핏 효과" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-extrabold">일반핏 vs 미니멀즈핏</h3>
            <p className="mt-1 text-[13px] md:text-sm text-neutral-600">밑단 접힘 없이 깔끔한 기장, 길어 보이는 실루엣. 전후 비교는 상세 페이지에서 확인하세요.</p>
          </div>
        </div>
      </section>

      {/* SIZE GUIDE (홈 간단 버전) */}
      <section id="size" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <h2 className="text-xl md:text-3xl font-extrabold">사이즈 가이드</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { fit: "Fit 160", spec: ['총장 95cm', '허리 29~31"', "밑위 26cm"] },
              { fit: "Fit 165", spec: ['총장 98cm', '허리 30~32"', "밑위 27cm"] },
              { fit: "Fit 170", spec: ['총장 101cm', '허리 31~33"', "밑위 28cm"] },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-[11px] text-neutral-500">RECOMMENDED</div>
                <div className="mt-0.5 font-bold text-[16px]">{s.fit}</div>
                <ul className="mt-2 text-[13px] text-neutral-700 space-y-1">
                  {s.spec.map((it, idx) => <li key={idx}>• {it}</li>)}
                </ul>
                <a href={`/products?fit=${encodeURIComponent(s.fit)}`} className="mt-3 inline-flex text-[13px] underline underline-offset-4">
                  해당 사이즈 상품 보기
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE TABS */}
      <nav className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-neutral-200 md:hidden">
        <div className="mx-auto max-w-6xl px-3">
          <div className="grid grid-cols-4 text-center text-[12px]">
            <a href="#top" className="py-3 font-semibold">홈</a>
            <a href="/products" className="py-3">상품</a>
            <a href="#size" className="py-3">사이즈</a>
            <a href="https://smartstore.naver.com/내상점" className="py-3 font-semibold text-white bg-black rounded-xl mx-2">구매</a>
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
