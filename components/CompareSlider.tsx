"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  heightClass?: string;
}

export default function CompareSlider({
  before,
  after,
  altBefore,
  altAfter,
  heightClass = "h-[400px]",
}: Props) {
  const [position, setPosition] = useState(50);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${heightClass}`}>
      <Image src={before} alt={altBefore} fill className="object-cover select-none" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={after} alt={altAfter} fill className="object-cover select-none" />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 accent-black"
      />
    </div>
  );
}
