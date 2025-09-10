"use client";

import { useState } from "react";
import Image from "next/image";

type Img = { src: string; alt?: string };

export default function ProductGallery({ images }: { images: Img[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* 메인 이미지 */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={images[active]?.src}
          alt={images[active]?.alt || "상품 이미지"}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 모바일: 가로 썸네일 */}
      <div className="mt-3 -mx-4 px-4 md:hidden overflow-x-auto no-scrollbar flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl border ${i === active ? "border-black" : "border-neutral-200"}`}
            aria-label={`이미지 ${i + 1} 보기`}
          >
            <Image src={img.src} alt={img.alt || `썸네일 ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* 데스크탑: 썸네일 그리드 */}
      <div className="mt-3 hidden md:grid grid-cols-5 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden rounded-xl border ${i === active ? "border-black" : "border-neutral-200"}`}
            aria-label={`이미지 ${i + 1} 보기`}
          >
            <Image src={img.src} alt={img.alt || `썸네일 ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
