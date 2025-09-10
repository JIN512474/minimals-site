"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "ko" | "en";
type Dict = Record<string, { ko: string; en: string }>;

const DICT: Dict = {
  // 공통 헤더/푸터/버튼
  nav_products: { ko: "상품", en: "Products" },
  nav_size: { ko: "사이즈", en: "Size" },
  nav_buy: { ko: "구매", en: "Buy" },
  btn_view_all: { ko: "전체 보기", en: "View All" },
  footer_terms: { ko: "이용약관", en: "Terms" },
  footer_privacy: { ko: "개인정보처리방침", en: "Privacy" },
  footer_support: { ko: "고객센터", en: "Support" },

  // 메인 히어로/섹션
  hero_kicker: { ko: "SMALL FRAME, BIG STYLE", en: "SMALL FRAME, BIG STYLE" },
  hero_title: { ko: "비율이 완성되는 미니멀즈핏", en: "Perfect Proportion, Minimals Fit" },
  hero_desc: {
    ko: "160~170cm 남성을 위해 총장/밑위/밑단을 다시 설계. 수선 없이 바로 입는 완벽 비율.",
    en: "Designed length/rise/hem for 160–170cm. Perfect proportion with no hemming.",
  },
  hero_btn_products: { ko: "상품 보기", en: "See Products" },
  hero_btn_size: { ko: "사이즈", en: "Size" },
  sec_why: { ko: "왜 미니멀즈핏인가요?", en: "Why Minimals Fit?" },
  sec_best: { ko: "베스트", en: "Best" },
  sec_new: { ko: "신상품", en: "New" },
  sec_size: { ko: "사이즈 가이드", en: "Size Guide" },
  feat_1_t: { ko: "전용 기장 설계", en: "Tailored Length" },
  feat_1_d: { ko: "160·165·170 총장으로 비율 최적화.", en: "160/165/170cm lengths for optimal proportion." },
  feat_2_t: { ko: "밑위/허벅지 최적화", en: "Rise/Thigh Balance" },
  feat_2_d: { ko: "앉아도 편안, 서면 더 길게.", en: "Comfort seated, longer lines standing." },
  feat_3_t: { ko: "미니멀 워싱", en: "Minimal Wash" },
  feat_3_d: { ko: "어떤 코디에도 어울리는 컬러.", en: "Clean tones that match any look." },
  card_view: { ko: "자세히 보기", en: "View" },

  // 홈 사이즈 카드
  size_fit_160: { ko: "Fit 160", en: "Fit 160" },
  size_fit_165: { ko: "Fit 165", en: "Fit 165" },
  size_fit_170: { ko: "Fit 170", en: "Fit 170" },
  size_spec_160: { ko: "총장 95cm · 허리 29~31\" · 밑위 26cm", en: "Length 95cm · Waist 29–31\" · Rise 26cm" },
  size_spec_165: { ko: "총장 98cm · 허리 30~32\" · 밑위 27cm", en: "Length 98cm · Waist 30–32\" · Rise 27cm" },
  size_spec_170: { ko: "총장 101cm · 허리 31~33\" · 밑위 28cm", en: "Length 101cm · Waist 31–33\" · Rise 28cm" },

  // 목록/상세 공통
  products_title_all: { ko: "전체 상품", en: "All Products" },
  products_filter_reset: { ko: "필터 초기화", en: "Reset Filters" },
  products_none: { ko: "해당 조건의 상품이 없습니다. 필터를 변경해 보세요.", en: "No products found. Try changing filters." },
  back_to_list: { ko: "← 목록으로", en: "← Back to List" },
  price: { ko: "₩59,000", en: "₩59,000" },
  size_label: { ko: "사이즈 선택", en: "Select Size" },
  color_label: { ko: "색상", en: "Color" },
  buy_now: { ko: "바로 구매", en: "Buy Now" },
  add_to_cart: { ko: "장바구니 담기", en: "Add to Cart" },
  details: { ko: "상세 설명", en: "Details" },
  cuts: { ko: "디테일 컷", en: "Detail Cuts" },
  faq: { ko: "FAQ", en: "FAQ" },
  size: { ko: "사이즈", en: "Size" },
};

const LangContext = createContext<{ lang: Lang; t: (k: keyof typeof DICT) => string; setLang: (l: Lang) => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    const fromStorage = (localStorage.getItem("lang") as Lang | null) || null;
    setLang(fromUrl || fromStorage || "ko");
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (k: keyof typeof DICT) => DICT[k]?.[lang] ?? "";

  const value = useMemo(() => ({ lang, t, setLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
