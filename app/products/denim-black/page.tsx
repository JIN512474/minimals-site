"use client";

import Image from "next/image";
import ProductSlider from "../../../components/ProductSlider";
import ColorSwatches from "../../../components/ColorSwatches";
import LangToggle from "../../../components/LangToggle";
import { useI18n } from "../../../components/LanguageProvider";
import { useMemo, useState } from "react";

type VariantImages = Record<string, { src: string; alt?: string }[]>;

export default function ProductDetailBlack() {
  const { t, } = useI18n();

  // 컬러 정의
  const COLORS = [
    { key: "black", name: "Black", hex: "#111111" },
    { key: "charcoal", name: "Charcoal", hex: "#2b2b2b" },
    { key: "faded", name: "Faded", hex: "#5a5a5a" },
  ] as const;

  // 컬러별 이미지 경로 매핑 (파일 없으면 hero.jpg로 대체됨)
  const VARIANT_IMAGES: VariantImages = useMemo(() => {
    const keys = ["black", "charcoal", "faded"];
    const make = (k: string) =>
      Array.from({ length: 5 }).map((_, i) => ({
        src: `/products/denim-black/${k}/${String(i + 1).padStart(2, "0")}.jpg`,
        alt: `Denim Black - ${k} - ${i + 1}`,
      }));
    const map: VariantImages = {};
    keys.forEach((k) => (map[k] = make(k)));
    return map;
  }, []);

  const [color, setColor] = useState<(typeof COLORS)[number]["key"]>("black");
  const images = VARIANT_IMAGES[color];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `미니멀즈 데님 – 블랙 (${COLORS.find((c) => c.key === color)?.name})`,
    image: images.map((i) => i.src),
    brand: "MINIMALS",
    offers: { "@type": "Offer", priceCurrency: "KRW", price: "59000", availability: "https://schema.org/InStock" },
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-[18px]">MINIMALS</a>
          <nav className="flex items-center gap-2 text-sm">
            <a href="/products" className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">{t("nav_products")}</a>
            <a href="/#size" className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">{t("nav_size")}</a>
            <a href="https://smartstore.naver.com/내상점" className="px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90">{t("nav_buy")}</a>
            <LangToggle />
          </nav>
        </div>
      </header>

      {/* HERO SUMMARY */}
      <section className="mx-auto max-w-6xl px-4 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* 슬라이더 */}
        <div>
          <ProductSlider slides={images} />
        </div>

        {/* 정보 */}
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold">미니멀즈 데님 – 블랙</h1>
          <p className="mt-1 text-lg font-semibold">{t("price")}</p>

          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            160~170cm 남성을 위해 총장/밑위/밑단을 재설계한 미니멀 블랙 데님.
            수선 없이 비율이 완성되는 실루엣.
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-neutral-600">
            <span className="px-2.5 py-1 rounded-full border">160·165·170 전용</span>
            <span className="px-2.5 py-1 rounded-full border">수선 無</span>
            <span className="px-2.5 py-1 rounded-full border">논페이드 워싱</span>
          </div>

          {/* 컬러 선택 */}
          <div className="mt-5">
            <label className="block text-sm font-semibold mb-2">{t("color_label")}</label>
            <ColorSwatches
              colors={COLORS as any}
              value={color}
              onChange={(key) => setColor(key as any)}
            />
          </div>

          {/* 사이즈/CTA */}
          <div className="mt-5">
            <label className="block text-sm font-semibold mb-2">{t("size_label")}</label>
            <select className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm">
              <option>Fit 160</option>
              <option>Fit 165</option>
              <option>Fit 170</option>
            </select>

            <a
              href="https://smartstore.naver.com/내상점"
              className="mt-4 block w-full rounded-2xl bg-black text-white py-3 text-base font-semibold text-center hover:opacity-90"
            >
              {t("buy_now")}
            </a>
            <button className="mt-2 w-full rounded-2xl border border-neutral-300 py-3 text-base font-semibold hover:bg-neutral-50">
              {t("add_to_cart")}
            </button>

            <div className="mt-3">
              <a href="/products" className="text-sm underline underline-offset-4">{t("back_to_list")}</a>
            </div>
          </div>

          <ul className="mt-5 space-y-1 text-sm text-neutral-700">
            <li>• 실루엣: 슬림 스트레이트</li>
            <li>• 원단: 12oz 코튼 데님</li>
            <li>• 컬러: Black / Charcoal / Faded</li>
            <li>• 제조: 한국</li>
          </ul>
        </div>
      </section>

      {/* 탭 */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <nav className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          <a href="#details" className="px-3 py-2 rounded-xl border text-center">{t("details")}</a>
          <a href="#cuts" className="px-3 py-2 rounded-xl border text-center">{t("cuts")}</a>
          <a href="#faq" className="px-3 py-2 rounded-xl border text-center">{t("faq")}</a>
          <a href="#size" className="hidden md:block px-3 py-2 rounded-xl border text-center">{t("size")}</a>
        </nav>
      </section>

      {/* 상세 설명 */}
      <section id="details" className="mx-auto max-w-6xl px-4 py-8 md:py-12 border-t border-neutral-200">
        <h2 className="text-xl md:text-2xl font-extrabold">{t("details")}</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold mb-1">핏 설계</h3>
            <p className="text-sm text-neutral-700">키 160/165/170 기준으로 총장·밑위·밑단 비율 최적화. 수선 없이 길어 보이는 레그 라인.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold mb-1">원단/워싱</h3>
            <p className="text-sm text-neutral-700">12oz 논페이드 블랙, 이염/변색 최소화. 미니멀 코디와 매칭.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold mb-1">제조/퀄리티</h3>
            <p className="text-sm text-neutral-700">국내 생산, 자체 패턴. 스티치/밑단/포켓 라인 안정화.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold mb-1">소재 정보</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• 소재: 코튼 100% (12oz)</li>
              <li>• 신축성: 약간</li>
              <li>• 두께감: 중간</li>
              <li>• 비침: 없음</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold mb-1">세탁/케어</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• 단독 저온 세탁 권장 (뒤집어서)</li>
              <li>• 건조기 사용 비권장 (수축 가능성)</li>
              <li>• 표백제 금지</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 디테일 컷 */}
      <section id="cuts" className="mx-auto max-w-6xl px-4 py-8 md:py-12 border-t border-neutral-200">
        <h2 className="text-xl md:text-2xl font-extrabold">{t("cuts")}</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
              <Image src={img.src} alt={img.alt || `디테일 컷 ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* SIZE (맨 아래) */}
      <section id="size" className="mx-auto max-w-6xl px-4 py-8 md:py-12 border-t border-neutral-200">
        <h2 className="text-xl md:text-2xl font-extrabold">{t("size")}</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { fit: "Fit 160", desc: "키 160±2cm 추천 / 26~28(inch)" },
            { fit: "Fit 165", desc: "키 165±2cm 추천 / 28~30(inch)" },
            { fit: "Fit 170", desc: "키 170±2cm 추천 / 29~31(inch)" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-4">
              <div className="text-[11px] text-neutral-500">RECOMMENDED</div>
              <div className="mt-1 font-semibold">{s.fit}</div>
              <div className="text-sm text-neutral-700">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[640px] w-full border border-neutral-200 text-sm">
            <thead className="bg-neutral-50">
              <tr className="[&>th]:px-3 [&>th]:py-2 [&>th]:text-left">
                <th>항목</th><th>Fit 160</th><th>Fit 165</th><th>Fit 170</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:px-3 [&>tr>*]:py-2">
              <tr className="border-t"><td className="text-neutral-600">총장</td><td>95cm</td><td>98cm</td><td>101cm</td></tr>
              <tr className="border-t"><td className="text-neutral-600">허리(단면)</td><td>38cm</td><td>39.5cm</td><td>41cm</td></tr>
              <tr className="border-t"><td className="text-neutral-600">밑위</td><td>26cm</td><td>27cm</td><td>28cm</td></tr>
              <tr className="border-t"><td className="text-neutral-600">허벅지(단면)</td><td>28cm</td><td>29cm</td><td>30cm</td></tr>
              <tr className="border-t"><td className="text-neutral-600">밑단(단면)</td><td>18cm</td><td>18.5cm</td><td>19cm</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[12px] text-neutral-500">※ 측정 위치에 따라 ±1~2cm 오차가 있을 수 있습니다.</p>
      </section>

      {/* 모바일 고정 CTA */}
      <nav className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-neutral-200 md:hidden">
        <div className="mx-auto max-w-6xl px-3 py-3">
          <a href="https://smartstore.naver.com/내상점" className="block w-full rounded-2xl bg-black text-white text-center py-3 text-[15px] font-semibold hover:opacity-90">
            {t("buy_now")}
          </a>
        </div>
      </nav>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} MINIMALS. All rights reserved.
        </div>
      </footer>

      {/* Product Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
