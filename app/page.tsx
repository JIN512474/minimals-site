import CompareSlider from "../components/CompareSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-wide text-xl md:text-2xl">MINIMALS</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fit" className="hover:opacity-70">미니멀즈핏</a>
            <a href="#products" className="hover:opacity-70">신상품</a>
            <a href="#size" className="hover:opacity-70">사이즈 가이드</a>
            <a href="#reviews" className="hover:opacity-70">리뷰</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <a href="https://smartstore.naver.com/내상점" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90">지금 쇼핑하기</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <p className="text-xs tracking-widest text-neutral-500 font-medium">SMALL FRAME, BIG STYLE</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              핏 하나로 <span className="underline decoration-neutral-300">5cm</span> 더 길어 보이는 데님
            </h1>
            <p className="mt-4 text-neutral-600">160~170cm 남성을 위해 총장/밑위/밑단까지 다시 설계한 <b>미니멀즈핏</b>. 수선 없이 그대로 입는 완벽한 비율.</p>
            <div className="mt-6 grid grid-cols-1 md:flex gap-3">
              <a href="#products" className="w-full md:w-auto rounded-2xl bg-black text-white px-5 py-3 text-base md:text-sm font-semibold text-center hover:opacity-90">신상 보기</a>
              <a href="#size" className="w-full md:w-auto rounded-2xl border border-neutral-300 px-5 py-3 text-base md:text-sm font-semibold text-center hover:bg-neutral-50">사이즈 가이드</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-black" />160·165·170 전용 기장</span>
              <span className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-black" />수선 없이 착용</span>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-3xl bg-neutral-100 overflow-hidden shadow-sm flex items-center justify-center">
            <div className="text-neutral-400 text-sm">HERO IMAGE</div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section id="fit" className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">왜 미니멀즈핏인가요?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "전용 기장 설계", desc: "160·165·170 전용 총장으로 비율 최적화, 수선 없이 바로 착용." },
              { title: "밑위/허벅지 최적화", desc: "앉을 때 편안하고 서면 길어 보이는 실루엣." },
              { title: "논페이드 미니멀 워싱", desc: "어떤 코디에도 어울리는 다크 인디고·블랙 컬러." },
            ].map((f, i) => (
              <div key={i} className="rounded-3xl border border-neutral-200 p-6 hover:shadow-sm transition-shadow">
                <div className="text-sm text-neutral-500">FEATURE {i + 1}</div>
                <div className="mt-2 text-lg font-bold">{f.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">신상품</h2>
            <a href="#shop" className="text-sm underline underline-offset-4">전체 보기</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "미니멀즈 데님 – 다크 인디고", price: "₩59,000", tag: "Fit 165" },
              { name: "미니멀즈 데님 – 블랙", price: "₩59,000", tag: "Fit 170" },
              { name: "크롭 자켓 – 블랙", price: "₩79,000", tag: "NEW" },
            ].map((p, i) => (
              <div key={i} className="group rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow active:scale-[0.99]">
                <div className="aspect-[4/5] bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400 text-xs">PRODUCT IMAGE</span>
                </div>
                <div className="p-5">
                  <div className="text-[11px] tracking-widest text-neutral-500">{p.tag}</div>
                  <div className="mt-1 font-semibold leading-tight">{p.name}</div>
                  <div className="mt-2 text-sm text-neutral-700">{p.price}</div>
                  <button className="mt-4 w-full rounded-2xl bg-black text-white py-3 text-base font-semibold hover:opacity-90">장바구니 담기</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-8 items-center">
          <CompareSlider before="/before.jpg" after="/after.jpg" altBefore="일반핏" altAfter="미니멀즈핏" heightClass="h-[520px]" />
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">일반핏 vs 미니멀즈핏</h3>
            <p className="mt-2 text-sm text-neutral-600">밑단 접힘 없이 깔끔한 기장, 길어 보이는 실루엣. 슬라이더를 좌우로 움직여 차이를 확인하세요.</p>
          </div>
        </div>
      </section>

      {/* SIZE GUIDE */}
      <section id="size" className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">사이즈 가이드</h2>
          <p className="mt-2 text-sm text-neutral-600">키 기반 사이즈 네이밍으로 더 쉽게 고르세요. 모델 정보와 실측을 함께 제공합니다.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { fit: "Fit 160", spec: ['총장 95cm', '허리 29~31"', "밑위 26cm"] },
              { fit: "Fit 165", spec: ['총장 98cm', '허리 30~32"', "밑위 27cm"] },
              { fit: "Fit 170", spec: ['총장 101cm', '허리 31~33"', "밑위 28cm"] },
            ].map((s, i) => (
              <div key={i} className="rounded-3xl border border-neutral-200 p-6">
                <div className="text-xs text-neutral-500">RECOMMENDED</div>
                <div className="mt-1 font-bold text-lg">{s.fit}</div>
                <ul className="mt-3 text-sm text-neutral-700 space-y-1">
                  {s.spec.map((it, idx) => <li key={idx}>• {it}</li>)}
                </ul>
                <a href="#shop" className="mt-4 inline-flex text-sm underline underline-offset-4">해당 사이즈 상품 보기</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">착용 후기</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: "JH***", body: "165/60인데 수선 없이 기장이 딱입니다. 다리가 진짜 길어 보임." },
              { name: "YS***", body: "밑위가 편해서 앉아있을 때도 불편함 없네요. 출근룩으로 매일 입습니다." },
              { name: "KM***", body: "Fit 170 구매했는데 비율 살려줘서 사진빨 최고. 재구매 의사 있어요." },
            ].map((r, i) => (
              <div key={i} className="rounded-3xl border border-neutral-200 p-6">
                <div className="text-sm font-semibold">{r.name}</div>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">“{r.body}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">FAQ</h2>
          <div className="mt-6 space-y-4">
            {[
              { q: "수선 없이 입을 수 있나요?", a: "네. 160·165·170 전용 총장으로 제작/선정해 바로 착용 가능합니다." },
              { q: "교환/반품은 어떻게 하나요?", a: "수령 후 7일 이내 미사용 제품에 한해 가능하며, 상세 안내는 정책 페이지를 확인하세요." },
              { q: "세탁 관리는 어떻게 하나요?", a: "뒤집어 저온 세탁을 권장합니다. 건조기 사용은 수축의 원인이 될 수 있어 피해주세요." },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border border-neutral-200 p-5">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500">
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
