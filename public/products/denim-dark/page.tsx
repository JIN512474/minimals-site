import Image from "next/image";

export default function ProductDetail() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "미니멀즈 데님 – 다크 인디고",
    image: ["/products/denim-dark/01.jpg"],
    brand: "MINIMALS",
    offers: { "@type": "Offer", priceCurrency: "KRW", price: "59000", availability: "https://schema.org/InStock" }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-[18px]">MINIMALS</a>
          <a href="/products" className="text-sm underline underline-offset-4">← 목록으로</a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[4/5] bg-neutral-100 rounded-2xl relative overflow-hidden">
          <Image src="/products/denim-dark/01.jpg" alt="미니멀즈 데님 – 다크 인디고" fill className="object-cover" />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold">미니멀즈 데님 – 다크 인디고</h1>
          <p className="mt-2 text-lg font-semibold">₩59,000</p>

          <p className="mt-4 text-sm text-neutral-600">
            160~170cm 남성을 위해 최적화된 비율. 총장/밑위/밑단을 맞춤 설계해 수선 없이 바로 착용 가능한 데님.
          </p>

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">사이즈 선택</label>
            <select className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm">
              <option>Fit 160</option>
              <option>Fit 165</option>
              <option>Fit 170</option>
            </select>
          </div>

          <a href="https://smartstore.naver.com/내상점" className="mt-6 block w-full rounded-2xl bg-black text-white py-3 text-base font-semibold text-center hover:opacity-90">
            바로 구매
          </a>
          <button className="mt-3 w-full rounded-2xl border border-neutral-300 py-3 text-base font-semibold hover:bg-neutral-50">
            장바구니 담기
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-bold">상품 설명</h2>
        <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
          • 12oz 논페이드 데님 원단<br/>
          • 전용 기장 160/165/170 제공<br/>
          • 밑위 최적화로 활동성↑, 다리 비율↑<br/>
          • 한국 생산, 자체 패턴 제작
        </p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} MINIMALS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
