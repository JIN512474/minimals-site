// app/products/page.tsx
import Image from "next/image";

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

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { cat?: string; fit?: string; sort?: string };
}) {
  const cat = (searchParams?.cat || "").toLowerCase();
  const fit = searchParams?.fit || "";

  let list = ALL.slice();

  // 카테고리 필터
  if (cat && ["bottoms", "tops", "outer", "accessories", "shoes"].includes(cat)) {
    list = list.filter((p) => p.category === cat);
  }

  // fit(사이즈 레이블) 포함 필터 (간단 키워드)
  if (fit) {
    list = list.filter((p) => (p.tag || "").toLowerCase().includes(fit.toLowerCase()));
  }

  // 정렬 (예: ?sort=best → 여기서는 상단 2개 고정 예시)
  if (searchParams?.sort === "best") {
    const bestOrder = ["denim-dark", "denim-black"];
    list.sort((a, b) => bestOrder.indexOf(a.slug) - bestOrder.indexOf(b.slug));
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:py-14">
      <h1 className="text-xl md:text-3xl font-extrabold">
        전체 상품{cat ? ` · ${cat.toUpperCase()}` : ""}{fit ? ` · ${fit}` : ""}
      </h1>

      {/* 필터 상태 안내/리셋 */}
      {(cat || fit) && (
        <div className="mt-3 text-sm">
          <a href="/products" className="underline underline-offset-4">필터 초기화</a>
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
        <p className="mt-8 text-sm text-neutral-500">해당 조건의 상품이 없습니다. 필터를 변경해 보세요.</p>
      )}
    </main>
  );
}
