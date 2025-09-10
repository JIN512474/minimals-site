"use client";

type Color = { key: string; name: string; hex: string };

export default function ColorSwatches({
  colors,
  value,
  onChange,
}: {
  colors: Color[];
  value: string; // 현재 선택된 color.key
  onChange: (key: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((c) => {
        const active = c.key === value;
        return (
          <button
            key={c.key}
            type="button"
            onClick={() => onChange(c.key)}
            className={`inline-flex items-center gap-2 rounded-xl border px-2.5 py-1.5 text-sm
              ${active ? "border-black" : "border-neutral-300 hover:bg-neutral-50"}
            `}
            aria-pressed={active}
            aria-label={`${c.name} 선택`}
            title={c.name}
          >
            <span
              className="h-4 w-4 rounded-full border border-black/10"
              style={{ backgroundColor: c.hex }}
            />
            <span className="text-[13px]">{c.name}</span>
          </button>
        );
      })}
    </div>
  );
}
