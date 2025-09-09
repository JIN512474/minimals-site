import CompareSlider from "../components/CompareSlider";

function MobileCarousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-4 px-4 overflow-x-auto no-scrollbar flex gap-4 md:grid md:grid-cols-3 md:gap-6">
      {/* 모바일: 가로 스크롤 카드 / 데스크탑: 그리드 */}
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-[18px]">MINIMALS</a>
          <nav className="flex items-center gap-2 text-sm">
            <a href="#products" className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">신상품</a>
            <a href="#size" className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50">사이즈</a>
            <a href="https://smartstore.naver.com/내상점" className="px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90">구매</a>
          </nav>
        </div>
      </header>

      {/* HERO (모바일 간결) */}
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
              <a href="#products" className="rounded-2xl bg-black text-white px-5 py-3 text-base font-semibold text-center hover:opacity-90">신상 보기</a>
              <a href="#size" className="rounded-2xl border border-neutral-300 px-5 py-3 text-base font-semibold text-center hover:bg-neutral-50">사이즈</a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-neutral-500">
              <span className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-black" /> 160·165·170 전용</span>
              <span className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-black" /> 수선 없이 착용</span>
            </div>
          </div>

          <div className="aspect-[4/5] rounded-3xl bg-neutral-100 overflow-hidden shadow-sm flex items-center justify-center">
            <div className="text-neutral-400 text-sm">HERO IMAGE</div>
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

      {/* PRODUCTS: 모바일 캐러셀 / 데스크탑 그리드 */}
      <section id="products" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold md:text-3xl">신상품</h2>
            <a href="#shop" className="text-sm underline underline-offset-4 hidden sm:inline-block">전체 보기</a>
          </div>

          {/* 모바일 캐러셀 */}
          <div className="mt-5 md:hidden">
            <MobileCarousel>
              {[
                { name: "데님 – 다크 인디고", price: "₩59,000", tag: "Fit 165" },
                { name: "데님 – 블랙", price: "₩59,000", tag: "Fit 170" },
                { name: "크롭 자켓 – 블랙", price: "₩79,000", tag: "NEW" },
              ].map((p, i) => (
                <div key={i} className="min-w-[75%] rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="aspect-[4/5] bg-neutral-100 flex items-center justify-center">
                    <span className="text-neutral-400 text-xs">PRODUCT IMAGE</span>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                    <div className="mt-0.5 font-semibold leading-tight text-[15px]">{p.name}</div>
                    <div className="mt-1 text-[13px] text-neutral-700">{p.price}</div>
                    <button className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold hover:opacity-90">담기</button>
                  </div>
                </div>
              ))}
            </MobileCarousel>
          </div>

          {/* 데스크탑 그리드 */}
          <div className="mt-6 hidden md:grid md:grid-cols-3 gap-6">
            {[
              { name: "데님 – 다크 인디고", price: "₩59,000", tag: "Fit 165" },
              { name: "데님 – 블랙", price: "₩59,000", tag: "Fit 170" },
              { name: "크롭 자켓 – 블랙", price: "₩79,000", tag: "NEW" },
            ].map((p, i) => (
              <div key={i} className="group rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow active:scale-[0.99]">
                <div className="aspect-[4/5] bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400 text-xs">PRODUCT IMAGE</span>
                </div>
                <div className="p-4">
                  <div className="text-[10px] tracking-widest text-neutral-500">{p.tag}</div>
                  <div className="mt-0.5 font-semibold leading-tight text-[15px]">{p.name}</div>
                  <div className="mt-1 text-[13px] text-neutral-700">{p.price}</div>
                  <button className="mt-3 w-full rounded-xl bg-black text-white py-3 text-[15px] font-semibold hover:opacity-90">담기</button>
                </div>
              </div>
            ))}
          </div>

          <a href="#shop" className="sm:hidden mt-4 inline-flex justify-center w-full rounded-xl border border-neutral-300 py-3 text-[15px] font-semibold">전체 상품 보기</a>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14 grid gap-6 items-center">
          <CompareSlider
            before="/before.jpg"
            after="/after.jpg"
            altBefore="일반핏"
            altAfter="미니멀즈핏"
            heightClass="h-[340px] md:h-[520px]"
          />
          <div>
            <h3 className="text-lg md:text-2xl font-extrabold">일반핏 vs 미니멀즈핏</h3>
            <p className="mt-1 text-[13px] md:text-sm text-neutral-600">밑단 접힘 없이 깔끔한 기장, 길어 보이는 실루엣. 슬라이더를 좌우로 움직여 차이를 확인하세요.</p>
          </div>
        </div>
      </section>

      {/* SIZE GUIDE */}
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
                <a href="#shop" className="mt-3 inline-flex text-[13px] underline underline-offset-4">해당 사이즈 상품 보기</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 mb-24 md:mb-0">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <h2 className="text-xl md:text-3xl font-extrabold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {[
              { q: "수선 없이 입을 수 있나요?", a: "네. 160·165·170 전용 총장으로 제작/선정해 바로 착용 가능합니다." },
              { q: "교환/반품은 어떻게 하나요?", a: "수령 후 7일 이내 미사용 제품에 한해 가능하며, 상세 안내는 정책 페이지를 확인하세요." },
              { q: "세탁 관리는 어떻게 하나요?", a: "뒤집어 저온 세탁을 권장합니다. 건조기 사용은 수축의 원인이 될 수 있어 피해주세요." },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border border-neutral-200 p-4">
                <summary className="cursor-pointer font-semibold text-[15px]">{f.q}</summary>
                <p className="mt-1 text-[13px] text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM TABS (모바일 고정) */}
      <nav className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-neutral-200 md:hidden">
        <div className="mx-auto max-w-6xl px-3">
          <div className="grid grid-cols-4 text-center text-[12px]">
            <a href="#top" className="py-3 font-semibold">홈</a>
            <a href="#products" className="py-3">상품</a>
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
              <a href="#" className="hover:opacity-70">이용약관</a>
              <a href="#" className="hover:opacity-70">개인정보처리방침</a>
              <a href="#" className="hover:opacity-70">고객센터</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
