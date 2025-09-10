"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt?: string };

interface Props {
  slides: Slide[];
  aspect?: string;         // ex) "aspect-[4/5]"
  rounded?: string;        // ex) "rounded-2xl"
  showDots?: boolean;
  showArrows?: boolean;
}

export default function ProductSlider({
  slides,
  aspect = "aspect-[4/5]",
  rounded = "rounded-2xl",
  showDots = true,
  showArrows = true,
}: Props) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const widthRef = useRef(0);

  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
  const go = (next: number) => setIdx(clamp(next, 0, slides.length - 1));
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  // resize 시 슬라이드 폭 캐싱
  useEffect(() => {
    const measure = () => {
      widthRef.current = trackRef.current?.clientWidth || 0;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // 키보드 ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  // 포인터/터치 드래그
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    currentX.current = e.clientX;
    const delta = currentX.current - startX.current;
    // track을 따라 미리 움직이는 시각 효과 (옵션)
    if (trackRef.current) {
      const base = -idx * 100;
      const percent = widthRef.current ? (delta / widthRef.current) * 100 : 0;
      trackRef.current.style.transform = `translateX(calc(${base}% + ${percent}%))`;
      trackRef.current.style.transition = "none";
    }
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const delta = currentX.current - startX.current;
    const threshold = Math.min(80, (widthRef.current || 320) * 0.18); // 스와이프 임계치
    if (delta > threshold) prev();
    else if (delta < -threshold) next();

    // 위치 snap
    if (trackRef.current) {
      const base = -idx * 100;
      trackRef.current.style.transition = "transform 300ms ease";
      trackRef.current.style.transform = `translateX(${base}%)`;
    }
  };

  // 인덱스 변경 시 위치 스냅
  useEffect(() => {
    if (trackRef.current) {
      const base = -idx * 100;
      trackRef.current.style.transition = "transform 300ms ease";
      trackRef.current.style.transform = `translateX(${base}%)`;
    }
  }, [idx]);

  if (!slides?.length) return null;

  return (
    <div className={`relative w-full select-none ${aspect} ${rounded} overflow-hidden bg-neutral-100`}>
      {/* 슬라이드 트랙 */}
      <div
        ref={trackRef}
        className="absolute inset-0 flex"
        style={{ transform: "translateX(0%)" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative shrink-0 w-full h-full" draggable={false}>
            <Image
              src={s.src}
              alt={s.alt || `slide-${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* 좌/우 화살표 */}
      {showArrows && (
        <>
          <button
            aria-label="이전 이미지"
            onClick={prev}
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/85 border border-neutral-200 shadow hover:bg-white"
          >
            <span className="sr-only">Prev</span>
            ‹
          </button>
          <button
            aria-label="다음 이미지"
            onClick={next}
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/85 border border-neutral-200 shadow hover:bg-white"
          >
            <span className="sr-only">Next</span>
            ›
          </button>
        </>
      )}

      {/* 도트 네비게이션 */}
      {showDots && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`이미지 ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                idx === i ? "w-6 bg-white shadow border border-neutral-300" : "w-2.5 bg-black/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}