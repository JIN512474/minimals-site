"use client";
import { useRef, useState, useEffect } from "react";

type Props = {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  heightClass?: string;
};

export default function CompareSlider({
  before,
  after,
  altBefore = "Before",
  altAfter = "After",
  heightClass = "h-[520px]",
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [pct, setPct] = useState(50);
  const [drag, setDrag] = useState(false);

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(rect.left, Math.min(clientX, rect.right));
    const percent = ((x - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, percent)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => drag && setFromClientX(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (!drag) return;
      const t = e.touches[0];
      t && setFromClientX(t.clientX);
    };
    const onUp = () => setDrag(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [drag]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full ${heightClass} rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100 select-none`}
      onMouseDown={(e) => { setDrag(true); setFromClientX(e.clientX); }}
      onTouchStart={(e) => { setDrag(true); const t = e.touches[0]; t && setFromClientX(t.clientX); }}
      role="region"
      aria-label="Before and After comparison slider"
    >
      {/* After (full) */}
      <img src={after} alt={altAfter} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <img src={before} alt={altBefore} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>
      {/* Divider & Handle */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow" style={{ left: `calc(${pct}% - 1px)` }} />
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-neutral-200 active:scale-95"
        style={{ left: `${pct}%` }}
        aria-label="슬라이더 핸들 (좌우로 드래그)"
        onMouseDown={(e) => { e.preventDefault(); setDrag(true); }}
        onTouchStart={(e) => { e.preventDefault(); setDrag(true); }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M7 5 L3 10 L7 15" stroke="black" strokeWidth="2" fill="none" />
          <path d="M13 5 L17 10 L13 15" stroke="black" strokeWidth="2" fill="none" />
        </svg>
      </button>
    </div>
  );
}
